from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    # Assuming retirementCalculator.py takes JSON input and returns JSON output
    result = subprocess.run(
        ['python', 'src/lib/retirementCalculator.py'],
        input=json.dumps(data),
        text=True,
        capture_output=True
    )
    return jsonify(result.stdout)

if __name__ == '__main__':
    app.run(debug=True)