from google import genai
from dotenv import load_dotenv
import os

# Configuring genai
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY not set")

client = genai.Client(api_key=api_key)

rules = """
- Leave a blank line between paragraphs
- Use bullet points where needed
- Use headings (##) for sections
- Do NOT write everything in one block
- Highlight text wherever necessary"""

quiz_rules = """
- For questions, write the options in next line and leave a blank line betwwen each options, questions and answers."""

# Creating AI response

def ai_response(text, output_type):

    if output_type == 'summary':

        prompt = f"""
            Summarize the following study notes in a clear and concise way.
        
            Rules:
            - Use short paragraphs or bullet points.
            - Keep the most important ideas.
            - Avoid unnecessary details.
            - Make it easy for a student to quickly revise.
            {rules}

            Notes:
            {text}"""
    
    elif output_type == 'keypoints':

        prompt = f"""
            Extract the most important key points from the following notes.

            Rules:
            - Present the output as bullet points.
            - Each point should be short and clear.
            - Focus only on the most important concepts.
            {rules}

            Notes:
            {text}"""

    elif output_type == "quiz":

        prompt = f"""
            Generate a short quiz based on the following notes.

            Rules:
            - Create 5 multiple choice questions.
            - Each question must have 4 options (A, B, C, D).
            - Mark the correct answer clearly.
            - Questions should test understanding, not memorization.
            {rules}
            {quiz_rules}

            Notes:
            {text}"""

    else :

        prompt = f"""
            Explain the following study notes.

            Explanation level: {output_type}

            Rules:
            - Beginner: use very simple language and examples.
            - Intermediate: moderate technical explanation.
            - Advanced: deep technical explanation with detailed concepts.
            {rules}

            Notes:
            {text}"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text