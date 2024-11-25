from . import db

class Cliente(db.Model):
    __tablename__ = 'cliente'

    id_cliente = db.Column(db.Integer, primary_key=True)
    cpf_cnpj = db.Column(db.String(18), unique=True, nullable=False)
    nome = db.Column(db.String(100))
    email = db.Column(db.String(100))
    telefone = db.Column(db.String(15))
    endereco = db.Column(db.String(150))
    cidade = db.Column(db.String(50))
    estado = db.Column(db.String(2))

    ordens_de_servico = db.relationship('OrdemDeServico', back_populates='cliente')

    def to_dict(self):
        return {
            "id_cliente": self.id_cliente,
            "cpf_cnpj": self.cpf_cnpj,
            "nome": self.nome,
            "email": self.email,
            "telefone": self.telefone,
            "endereco": self.endereco,
            "cidade": self.cidade,
            "estado": self.estado
        }    