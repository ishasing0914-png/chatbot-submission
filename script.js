let knowledgeGaps = [];
let knowledgeBase = [];
let rejectedKnowledge = [];
let lastAnswer = null;

// Knowledge files
const knowledgeFiles = [
  "knowledge/photosynthesis.json",
  "knowledge/water_cycle.json",
  "knowledge/states_of_matter.json",
  "knowledge/solar_system.json",
  "knowledge/evaporation.json",
  "knowledge/respiration.json",
  "knowledge/gravity.json",
  "knowledge/plants.json",
  "knowledge/animals.json",
  "knowledge/food_chain.json",

  // Day 5 manually improved entries
  "knowledge/osmosis.json",
  "knowledge/diffusion.json",
  "knowledge/pollination.json",
  "knowledge/mitosis.json",
  "knowledge/evaporation_process.json",

  // Day 6 indigenous expansion
  "knowledge/panchatatva.json",
  "knowledge/ayurveda_basics.json",
  "knowledge/yoga_pranayama.json"
];

// Load and validate knowledge
Promise.all(
  knowledgeFiles.map(file => fetch(file).then(res => res.json()))
).then(data => {
  data.forEach(item => {

    // Reject missing source
    if (!item.source || item.source.trim() === "") {
      rejectedKnowledge.push(item);
      return;
    }

    // Reject duplicate content
    const duplicate = knowledgeBase.find(
      k => k.content === item.content
    );
    if (duplicate) {
      rejectedKnowledge.push(item);
      return;
    }

    knowledgeBase.push(item);
  });
});

// Chat function
function sendMessage() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let matched = false;

  for (let item of knowledgeBase) {
    if (input.includes(item.topic.toLowerCase())) {
      matched = true;

      // Weak knowledge
      if (item.confidence === "low") {
        knowledgeGaps.push({
          question: input,
          issue: "Weak or missing knowledge"
        });
        document.getElementById("botReply").innerText =
          "This answer needs human verification.";
        return;
      }

      // ✅ Valid answer
      lastAnswer = item;
      const tag = item.tag || "unclassified";
      document.getElementById("botReply").innerText =
        `${item.content} (Tag: ${tag})`;
      return;
    }
  }

  // No match
  if (!matched) {
    knowledgeGaps.push({
      question: input,
      issue: "No knowledge available"
    });
    document.getElementById("botReply").innerText =
      "Sorry, this needs human knowledge.";
  }
}

// Why this answer?
function showWhy() {
  if (!lastAnswer) {
    alert("No answer selected yet.");
    return;
  }

  alert(
    `Source: ${lastAnswer.source}
Confidence: ${lastAnswer.confidence}
Age Group: ${lastAnswer.age_group}`
  );
}

// Mock LM (Day 4)
function getMockLMAnswer(question) {
  return "This is a mock language model response.";
}

// Show gaps dashboard
function showGaps() {
  const list = document.getElementById("gapList");
  list.innerHTML = "";

  knowledgeGaps.forEach(gap => {
    const li = document.createElement("li");
    li.innerText = `${gap.question} → ${gap.issue}`;
    list.appendChild(li);
  });
}
