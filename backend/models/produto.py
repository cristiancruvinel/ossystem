from . import db
from sqlalchemy import DECIMAL

class Produto(db.Model):
    __tablename__ = 'produto'
    
    id_produto = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))
    preco = db.Column(db.DECIMAL(8, 2))
    tipo_produto = db.Column(db.String(50))

    ordens = db.relationship('OrdemProduto', back_populates='produto')

    def to_dict(self):
        return {
            "id_produto": self.id_produto,
            "nome": self.nome,
            "preco": str(self.preco),  # Convertendo para string para JSON
            "tipo_produto": self.tipo_produto
        }