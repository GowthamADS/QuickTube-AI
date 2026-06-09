from typing import Iterator


def chunk_text(text: str, max_length: int = 3000) -> Iterator[str]:
    words = text.split()
    chunk = []
    current_length = 0

    for word in words:
        if current_length + len(word) + 1 > max_length:
            yield " ".join(chunk)
            chunk = [word]
            current_length = len(word)
        else:
            chunk.append(word)
            current_length += len(word) + 1

    if chunk:
        yield " ".join(chunk)
