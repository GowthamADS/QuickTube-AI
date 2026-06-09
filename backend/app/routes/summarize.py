from fastapi import APIRouter, HTTPException
import json

from app.models.request_models import VideoRequest
from app.services.youtube_service import extract_video_id
from app.services.transcript_service import get_transcript
from app.services.ai_service import summarize_video

router = APIRouter()


@router.post("/summarize")
def summarize(request: VideoRequest):

    video_id = extract_video_id(request.youtube_url)

    if not video_id:
        raise HTTPException(
            status_code=400,
            detail="Invalid YouTube URL"
        )

    try:
        transcript = get_transcript(video_id)

        if transcript == "Transcript unavailable for this video.":
            raise HTTPException(
                status_code=400,
                detail="This video does not provide subtitles/transcripts."
            )

        ai_response = summarize_video(transcript)

        ai_response = ai_response.replace("```json", "")
        ai_response = ai_response.replace("```", "")
        ai_response = ai_response.strip()

        result = json.loads(ai_response)

        result["video_id"] = video_id

        return result

    except HTTPException:
        raise

    except json.JSONDecodeError:
        raise HTTPException(
            status_code=500,
            detail="Failed to parse AI response."
        )

    except Exception as e:

        if "429" in str(e):
            raise HTTPException(
                status_code=429,
                detail="AI quota exceeded. Please try again later."
            )

        raise HTTPException(
            status_code=500,
            detail=f"Server Error: {str(e)}"
        )