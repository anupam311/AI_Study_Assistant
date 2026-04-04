const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function get_output(notes, type) {

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 seconds timeout

  try {
    const response = await fetch(`${API_URL}/generate-output`, {
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

    return await response.json();

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