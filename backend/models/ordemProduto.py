from . import db

class OrdemProduto(db.Model):
    __tablename__ = 'ordem_produto'
    
    id_ordem_de_servico = db.Column(db.Integer, db.ForeignKey('ordem_de_servico.id_ordem_de_servico'), primary_key=True)
    id_produto = db.Column(db.Integer, db.ForeignKey('produto.id_produto'), primary_key=True)
    quantidade = db.Column(db.Integer, default=1)

    ordem = db.relationship('OrdemDeServico', back_populates='produtos')
    produto = db.relationship('Produto', back_populates='ordens')

    def to_dict(self):
        return {
            "id_ordem_de_servico": self.id_ordem_de_servico,
            "id_produto": self.id_produto,
            "quantidade": self.quantidade
        }