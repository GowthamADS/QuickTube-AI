from dotenv import load_dotenv
from pathlib import Path
from openai import OpenAI
import os

# Locate .env file
env_path = Path(__file__).parent / ".env"

print("CURRENT DIR:", os.getcwd())
print("ENV PATH:", env_path)

# Load .env
load_dotenv(env_path)

# Read API Key
api_key = os.getenv("OPENROUTER_API_KEY")

print("KEY:", api_key)

if not api_key:
    raise Exception(
        "OPENROUTER_API_KEY not found in .env"
    )

# Create client
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=api_key
)

print("Client Created Successfully ✅")

# Test request
response = client.chat.completions.create(
    model="deepseek/deepseek-chat",
    messages=[
        {
            "role": "user",
            "content": "Explain AI in one sentence."
        }
    ]
)

print("\nResponse:\n")
print(response.choices[0].message.content)