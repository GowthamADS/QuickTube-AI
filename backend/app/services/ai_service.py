from openai import OpenAI
from app.config import OPENROUTER_API_KEY

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=OPENROUTER_API_KEY,
)


def summarize_video(transcript: str):

    prompt = f"""
Analyze this YouTube transcript.

Return ONLY valid JSON.

{{
  "title": "",
  "summary": "",
  "keyPoints": [],
  "topics": [],
  "difficulty": "",
  "audience": [],
  "learningTime": ""
}}

Rules:
- difficulty must be Beginner, Intermediate, or Advanced
- audience should contain 3-5 suitable learner groups
- learningTime should be a realistic estimate such as:
  "10-20 mins"
  "30-45 mins"
  "1-2 hours"
- Return ONLY JSON
- Do NOT wrap the JSON in markdown

Transcript:

{transcript[:12000]}
"""

    response = client.chat.completions.create(
        model="deepseek/deepseek-chat",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content