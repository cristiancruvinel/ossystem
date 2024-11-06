from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route("/members")
def members():
    return {"members": ["name", "email", "password"]}
 
if __name__ == '__main__':
    app.run()