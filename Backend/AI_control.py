from dotenv import load_dotenv
from google import genai
from groq import Groq
import os

load_dotenv()

# -------- API Clients --------
gemini_api_key = os.getenv("GEMINI_API_KEY")
groq_api_key = os.getenv("GROQ_API_KEY")

if not gemini_api_key:
    raise ValueError("GEMINI_API_KEY not set")

if not groq_api_key:
    raise ValueError("GROQ_API_KEY not set")

gemini_client = genai.Client(api_key=gemini_api_key)
groq_client = Groq(api_key=groq_api_key)

# -------- Shared rules --------
COMMON_RULES = """
    - Leave a blank line between paragraphs.
    - Use bullet points where needed.
    - Use headings with ## where useful.
    - Do NOT write everything in one large block.
    - Make the output easy for a student to revise quickly.
    - Keep the language clear and readable.
    """

QUIZ_RULES = """
    - Generate well-formatted quiz questions.
    - Put options on separate lines.
    - Leave a blank line between question, options, and answer.
    - Include the correct answer clearly at the end of each question.
    """

EXPLAIN_RULES = """
    - Explain step by step.
    - Use simple wording when needed.
    - Use examples where useful.
    - Keep the structure clean and readable.
    """


def build_prompt(text, output_type,):
    text = text.strip()

    if output_type == "summary":
        return f"""
            Summarize the following study notes.

            Rules:
            {COMMON_RULES}
            - Focus only on the most important ideas.
            - Avoid unnecessary details.

            Notes:
            {text}
            """.strip()

    elif output_type == "keypoints":
        return f"""
            Extract the key points from the following study notes.

            Rules:
            {COMMON_RULES}
            - Use crisp bullet points.
            - Do not turn it into long paragraphs.

            Notes:
            {text}
            """.strip()

    elif output_type == "quiz":
        return f"""
            Create a quiz from the following study notes.

            Rules:
            {COMMON_RULES}
            {QUIZ_RULES}
            - Make the questions useful for revision.
            - Prefer conceptual questions over trivial memorization.

            Notes:
            {text}
            """.strip()

    else:
        return f"""
            Explain the following study notes for a {output_type} student.

            Rules:
            {COMMON_RULES}
            {EXPLAIN_RULES}

            Level:
            {output_type}

            Notes:
            {text}
            """.strip()


def generate_with_gemini(prompt):
    response = gemini_client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    if not getattr(response, "text", None):
        raise ValueError("Gemini returned an empty response")

    return response.text.strip()


def generate_with_groq(prompt):
    response = groq_client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful academic study assistant. Format answers clearly."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.4
    )

    content = response.choices[0].message.content

    if not content:
        raise ValueError("Groq returned an empty response")

    return content.strip()


def ai_response(text, output_type):
    prompt = build_prompt(text, output_type)

    try:
        result = generate_with_gemini(prompt)
        return {
            "result": result,
            "provider": "gemini",
            "fallback_used": False
        }

    except Exception as gemini_error:
        print("Gemini failed:", gemini_error)

        try:
            result = generate_with_groq(prompt)
            return {
                "result": result,
                "provider": "groq",
                "fallback_used": True
            }

        except Exception as groq_error:
            print("Groq failed:", groq_error)
            raise RuntimeError(
                f"Both providers failed. Gemini: {gemini_error} | Groq: {groq_error}"
            )