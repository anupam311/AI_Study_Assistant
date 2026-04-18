from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from Backend.AI_control import ai_response
import os

app = Flask(
    __name__,
    static_folder="../Frontend/dist",
    static_url_path="/"
)

CORS(app)


@app.route("/generate-output", methods=["POST"])
def generate_output():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No JSON data received"}), 400

        text = (data.get("text") or "").strip()
        output_type = (data.get("type") or "").strip()
        
        result_data = ai_response(text, output_type)
        return jsonify(result_data), 200

    except ValueError as e:
        return jsonify({"error": str(e)}), 400

    except RuntimeError as e:
        return jsonify({
            "error": "AI services are currently unavailable",
            "details": str(e)
        }), 503

    except Exception as e:
        print("Server error:", e)
        return jsonify({"error": "Internal server error"}), 500


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    full_path = os.path.join(app.static_folder, path)

    if path != "" and os.path.exists(full_path):
        return send_from_directory(app.static_folder, path)

    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(debug=True)