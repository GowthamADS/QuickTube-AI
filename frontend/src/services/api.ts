const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function postSummary(videoUrl: string) {
  const response = await fetch(`${baseURL}/summarize`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ video_url: videoUrl }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch summary");
  }

  return response.json();
}
