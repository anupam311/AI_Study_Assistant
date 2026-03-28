from flask import Flask, request, jsonify
from flask_cors import CORS
from AI_control import ai_response

app = Flask(__name__)
CORS(app)

@app.route('/generate-output', methods = ["POST"])
def generate_output():
    data = request.get_json()
    text = data.get('text')
    output_type = data.get('type')

    summary = ai_response(text, output_type)

    return jsonify({"result": summary})

if __name__ == '__main__':
    app.run(debug=True)