from youtube_transcript_api import YouTubeTranscriptApi

def get_transcript(video_id):
    try:
        api = YouTubeTranscriptApi()
        transcript = api.fetch(video_id)

        return " ".join(
            [item.text for item in transcript]
        )

    except Exception:
        return "Transcript unavailable for this video."