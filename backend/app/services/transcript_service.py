from youtube_transcript_api import YouTubeTranscriptApi

def get_transcript(video_id):
    try:
        print(f"VIDEO ID: {video_id}")

        transcript = YouTubeTranscriptApi().fetch(video_id)

        return " ".join(
            [item.text for item in transcript]
        )

    except Exception as e:
        print("TRANSCRIPT ERROR:", str(e))
        raise Exception(str(e))