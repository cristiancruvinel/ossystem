from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

DB_USER = os.getenv('DB_USER', 'postgres.kvtrgevagnpgpgjxznei')          
DB_PASSWORD = os.getenv('DB_PASSWORD', 'LzrS*Bar3L@B4XG')
DB_HOST = os.getenv('DB_HOST', 'aws-0-us-east-1.pooler.supabase.com')
DB_PORT = os.getenv('DB_PORT', '6543')
DB_NAME = os.getenv('DB_NAME', 'postgres')

app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from classes import Cliente, Usuario, OrdemDeServico, Produto, OrdemProduto

@app.route("/members")
def members():
    return {"members": ["name", "email", "password"]}
 
if __name__ == '__main__':
    app.run()