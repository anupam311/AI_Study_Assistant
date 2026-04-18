export async function get_output(notes, type) {

  const baseTime = 15000;
  const extraTime = notes.length * 5;
  const totalTimeout = baseTime + extraTime;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), totalTimeout);

  try {
    const response = await fetch("/generate-output", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({text: notes, type: type}),
      signal: controller.signal
    });

    let data = {};
    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (!response.ok) {
      const errorMessage = data.error || "SERVER_ERROR";

      if (response.status === 429) throw new Error("RATE_LIMIT");
      if (response.status === 503) throw new Error("AI_UNAVAILABLE");
      if (response.status >= 500) throw new Error("SERVER_DOWN");

      throw new Error(errorMessage);
    }

    return {
      result: data.result,
      provider: data.provider || "",
      fallback_used: data.fallback_used || false,
    };

  } catch (error) {

    if (error.name === "AbortError") {
      console.error("Request timed out");
      throw new Error("TIMEOUT");
    }

    if (error.name === "TypeError") {
      console.error("Network error or CORS issue:", error);
      throw new Error("NETWORK_ERROR");
    }

    throw error;

  } finally {
    clearTimeout(timeoutId);
  }
}
