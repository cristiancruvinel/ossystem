from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from models import db, init_db
from routes import init_app


app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

init_db(app)

init_app(app)

if __name__ == '__main__':
    app.run()