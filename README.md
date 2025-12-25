# chatbot-submission
7 day chatbot task submission

# Day 1 – Rule-Based Chatbot

This project demonstrates how a chatbot works without AI.

Flow:
User Input → JavaScript Logic → JSON Response → Output

The chatbot matches user input with predefined responses
stored in a JSON file.
## Day 2 – Knowledge as Data

In Day 2, I structured knowledge into multiple JSON files.
Each file contains topic, age group, content, source, and confidence.

The chatbot now answers user queries using structured knowledge
instead of fixed responses.

This task showed me that answer quality depends on
how accurate and well-structured the knowledge is.
## Day 3 – Validation & Trust Gate

In Day 3, I added validation rules to control knowledge quality.
Knowledge without source or duplicate content is rejected.
The chatbot explains trust using a “Why this answer?” feature.
This task taught me how trust and validation are critical in real systems.

# Knowledge-Based Chatbot Project

This project is a simple chatbot built using HTML, JavaScript, and a local JSON-based knowledge system.  
The chatbot answers questions using stored knowledge and identifies gaps when knowledge is missing or weak.

---

## 🔹 Day 4 – Knowledge Validation

### What was done
- Implemented structured knowledge files using JSON
- Each knowledge entry includes:
  - topic
  - age_group
  - content
  - confidence level
- Chatbot validates answers before responding
- If knowledge is weak or missing, it avoids giving incorrect answers

### Outcome
- Chatbot provides safer and more accurate responses
- Reduced chances of wrong information

---

## 🔹 Day 5 – Knowledge Gap Detection & Manual Improvement

### What was done
- Implemented knowledge gap detection
- Chatbot identifies:
  - Unanswered questions
  - Weak-confidence answers
- Added a **Knowledge Gaps Dashboard** to display gaps
- Manually improved 5 knowledge entries by:
  - Adding proper sources
  - Increasing confidence level
  - Updating content clearly

### Example Improved Entry
```json
{
  "topic": "osmosis",
  "age_group": "Grade 7",
  "content": "Osmosis is the movement of water molecules through a semi-permeable membrane from higher concentration to lower concentration.",
  "source": "NCERT Biology",
  "confidence": "high"
}

