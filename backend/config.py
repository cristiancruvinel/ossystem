import os
from urllib.parse import quote_plus

class Config:
    
    password = quote_plus("password here")
    SECRET_KEY = os.environ.get('SECRET_KEY', "secret_key")	
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI',f"postgresql://postgres.kvtrgevagnpgpgjxznei:{password}@aws-0-us-east-1.pooler.supabase.com:6543/postgres")
    SQLALCHEMY_TRACK_MODIFICATIONS = False