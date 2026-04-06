from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from .AI_control import ai_response
import os

app = Flask(
    __name__,
    static_folder="../frontend/dist",
    static_url_path="/"
)

CORS(app)


@app.route("/generate-output", methods=["POST"])
def generate_output():
    data = request.get_json()

    text = data.get("text", "")
    output_type = data.get("type", "")

    result = ai_response(text, output_type)

    return jsonify({"result": result})


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    if path and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)

    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(debug=True)
