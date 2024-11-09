from flask import Flask, jsonify
from flask_cors import CORS  # Importa o CORS

app = Flask(__name__)
CORS(app)  # Adiciona o CORS ao app Flask

@app.route('/api/hello')
def hello():
    return jsonify(message="Hello from Flask!")

if __name__ == "__main__":
    app.run(debug=True)