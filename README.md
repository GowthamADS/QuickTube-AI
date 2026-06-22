<div align="center">

# QuickTube

### AI-Powered YouTube Video Summarizer

Convert long YouTube videos into concise, meaningful summaries using Natural Language Processing and Large Language Models.

<p>
  <img src="https://img.shields.io/badge/Python-3.11-blue?style=flat-square">
  <img src="https://img.shields.io/badge/Flask-Web_Framework-black?style=flat-square">
  <img src="https://img.shields.io/badge/NLP-AI-success?style=flat-square">
  
</p>

</div>

---
## Preview


QuickTube enables users to convert lengthy YouTube videos into concise, meaningful summaries using Natural Language Processing and Large Language Models.

The live application is available below.

<p align="center">
    <a href="https://quicktube-ai.netlify.app/">
        <img src="https://img.shields.io/badge/Visit-Live%20Application-111827?style=for-the-badge&logo=netlify&logoColor=white">
    </a>
</p>

---

## Overview

QuickTube is an AI-powered web application that summarizes YouTube videos into concise, easy-to-read insights.

The application automatically extracts video transcripts, processes them using Natural Language Processing (NLP) and Large Language Models (LLMs), and generates high-quality summaries within seconds.

It is designed for students, professionals, researchers, and anyone looking to consume educational content more efficiently.

---

## Features

| | |
|---|---|
| AI-powered summarization | Automatic transcript extraction |
| Fast processing | Clean responsive interface |
| Public YouTube support | NLP-based text processing |
| Easy to use | Lightweight architecture |

---

## Architecture

```
User
   │
   ▼
YouTube URL
   │
   ▼
Transcript Extraction
   │
   ▼
Natural Language Processing
   │
   ▼
Large Language Model
   │
   ▼
Summary Generation
```

---

## Technology Stack

| Layer | Technologies |
|--------|--------------|
| Backend | Python, Flask |
| AI | Large Language Models |
| NLP | Natural Language Processing |
| APIs | YouTube Transcript API |
| Frontend | HTML5, CSS3, JavaScript |
| Version Control | Git, GitHub |

---

## Project Structure

```text
QuickTube
│
├── backend/                    # Flask backend & AI processing
│   ├── app/                    # Application modules
│   ├── run.py                  # Application entry point
│   ├── requirements.txt        # Python dependencies
│   └── test_openrouter.py      # API testing
│
├── frontend/                   # React + Vite frontend
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.tsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
├── docs/                       # Project documentation
├── screenshots/                # README images & GIFs
│
├── .gitignore
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/yourusername/QuickTube.git
```

Navigate into the project

```bash
cd QuickTube
```

Install dependencies

```bash
pip install -r requirements.txt
```

Start the application

```bash
python app.py
```

Visit

```
http://127.0.0.1:5000
```

---


## How It Works

1. Paste a YouTube URL.
2. Extract the transcript.
3. Process the transcript using NLP.
4. Generate an AI-powered summary.
5. Display the summarized content.

---

## Future Improvements

- Multi-language support
- PDF export
- Chrome extension
- Authentication
- Summary history
- AI-generated notes
- Keyword extraction
- Cloud deployment

---

## Performance Goals

| Metric | Target |
|----------|-----------|
| Transcript extraction | < 5 sec |
| AI summary generation | < 10 sec |
| Responsive UI | Mobile/Desktop |
| Browser Support | Chrome, Edge, Firefox |

---

## Developer

**Gowtham D**

Artificial Intelligence & Data Science Graduate

Focused on building AI-powered web applications using Machine Learning, Natural Language Processing, and modern backend technologies.

---

# Support

<p align="center">
  <a href="https://github.com/GowthamADS/QuickTube-AI">
    <img src="https://img.shields.io/badge/⭐_Give_a_Star-Support_Project-gold?style=for-the-badge" />
  </a>
</p>

<p align="center">
  If you found this project useful, please consider giving it a ⭐ on GitHub!
</p>
