from urllib.parse import urlparse, parse_qs

def extract_video_id(url: str):

    parsed_url = urlparse(url)

    if "youtube.com" in parsed_url.netloc:
        return parse_qs(
            parsed_url.query
        )["v"][0]

    if "youtu.be" in parsed_url.netloc:
        return parsed_url.path[1:]

    return None