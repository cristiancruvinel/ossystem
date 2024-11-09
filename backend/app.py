from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from models import cliente, produto, ordemDeServico, ordemProduto, usuario, init_db


app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

init_db(app)

if __name__ == '__main__':
    app.run(debug=True)