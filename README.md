# TubeMind AI

Sample project scaffold for a YouTube transcript summarization app.

## Structure

- `frontend/` — Vite + React TypeScript frontend
- `backend/` — FastAPI backend with YouTube transcript and OpenAI integration

## Backend setup

1. Create a Python virtual environment in `backend/venv`
2. Install dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```
3. Add your OpenAI API key in `backend/.env`
4. Run the backend:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

## Frontend setup

1. Install JS dependencies in `frontend/`
2. Run the frontend dev server

## Notes

This scaffold contains starter code and placeholder structure only.
