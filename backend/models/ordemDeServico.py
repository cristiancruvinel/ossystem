from . import db
from sqlalchemy import DECIMAL

class OrdemDeServico(db.Model):
    __tablename__ = 'ordem_de_servico'
    
    id_ordem_de_servico = db.Column(db.Integer, primary_key=True)
    descricao = db.Column(db.String)
    marca = db.Column(db.String(50))
    modelo = db.Column(db.String(50))
    valor_total = db.Column(db.DECIMAL(10, 2))
    status = db.Column(db.String(20))
    tipo_os = db.Column(db.String(50))
    objeto_os = db.Column(db.String(100))
    data = db.Column(db.Date)
    hora = db.Column(db.Time)

    id_cliente = db.Column(db.Integer, db.ForeignKey('cliente.id_cliente'))
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuario.id_usuario'))

    cliente = db.relationship('Cliente', back_populates='ordens_de_servico')
    usuario = db.relationship('Usuario', back_populates='ordens_criadas')
    produtos = db.relationship('OrdemProduto', back_populates='ordem')

    def to_dict(self):
        return {
            "id_ordem_de_servico": self.id_ordem_de_servico,
            "descricao": self.descricao,
            "marca": self.marca,
            "modelo": self.modelo,
            "valor_total": str(self.valor_total),  # Convertendo para string para JSON
            "status": self.status,
            "tipo_os": self.tipo_os,
            "objeto_os": self.objeto_os,
            "data": self.data.isoformat() if self.data else None,
            "hora": self.hora.isoformat() if self.hora else None,
            "id_cliente": self.id_cliente,
            "id_usuario": self.id_usuario
        }