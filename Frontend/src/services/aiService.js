export async function get_output(notes, type) {

  const baseTime = 15000;
  const extraTime = notes.length * 5;
  const totalTimeout = baseTime + extraTime;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), totalTimeout);

  try {
    const response = await fetch("generate-output", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({text: notes, type: type}),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({})); 
      const errorMessage = errorData.error || "SERVER_ERROR";

      if (response.status === 429) throw new Error("RATE_LIMIT");
      if (response.status >= 500) throw new Error("SERVER_DOWN");

      throw new Error(errorMessage);
    }

    return (await response.json()).result;

  } catch (error) {
    clearTimeout(timeoutId);

    if (error.name === "AbortError") {
      console.error("Request timed out");
      throw new Error("TIMEOUT");
    }

    if (error.name === "TypeError") {
      console.error("Network error or CORS issue:", error);
      throw new Error("NETWORK_ERROR");
    }

    throw error;

  }
}
