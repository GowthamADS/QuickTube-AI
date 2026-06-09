from pydantic import BaseModel

class SummaryResponse(BaseModel):
    title: str
    summary: str
    keyPoints: list[str]
    topics: list[str]
    difficulty: str