from . import db
from werkzeug.security import generate_password_hash, check_password_hash

class Usuario(db.Model):
    __tablename__ = 'usuario'
    
    id_usuario = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    tipo_usuario = db.Column(db.String(20))
    senha = db.Column(db.String(255))

    ordens_criadas = db.relationship('OrdemDeServico', back_populates='usuario')

    def set_password(self, password):
        self.senha = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.senha, password)

    def to_dict(self):
        return {
            "id_usuario": self.id_usuario,
            "email": self.email,
            "tipo_usuario": self.tipo_usuario
        }
    