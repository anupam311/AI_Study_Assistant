const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function get_output(notes, type) {
  const response = await fetch(`${API_URL}/generate-output`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({text: notes, type: type}),
  });

  let data = await response.json();
  return data.result;
}