from sqlalchemy import create_engine, Column, Integer, String, Date, Time, DECIMAL, ForeignKey
from sqlalchemy.orm import relationship, declarative_base

Base = declarative_base()

class Cliente(Base):
    __tablename__ = 'cliente'
    
    id_cliente = Column(Integer, primary_key=True)
    cpf_cnpj = Column(String(18), unique=True, nullable=False)
    nome = Column(String(100))
    email = Column(String(100))
    telefone = Column(String(15))
    endereco = Column(String(150))
    cidade = Column(String(50))
    estado = Column(String(2))

    ordens_de_servico = relationship('OrdemDeServico', back_populates='cliente')

class Usuario(Base):
    __tablename__ = 'usuario'
    
    id_usuario = Column(Integer, primary_key=True)
    email = Column(String(100), unique=True, nullable=False)
    tipo_usuario = Column(String(20))
    senha = Column(String(50))

    ordens_criadas = relationship('OrdemDeServico', back_populates='usuario')

class OrdemDeServico(Base):
    __tablename__ = 'ordem_de_servico'
    
    id_ordem_de_servico = Column(Integer, primary_key=True)
    descricao = Column(String)
    marca = Column(String(50))
    modelo = Column(String(50))
    valor_total = Column(DECIMAL(10, 2))
    status = Column(String(20))
    tipo_os = Column(String(50))
    objeto_os = Column(String(100))
    data = Column(Date)
    hora = Column(Time)

    id_cliente = Column(Integer, ForeignKey('cliente.id_cliente'))
    id_usuario = Column(Integer, ForeignKey('usuario.id_usuario'))

    cliente = relationship('Cliente', back_populates='ordens_de_servico')
    usuario = relationship('Usuario', back_populates='ordens_criadas')
    produtos = relationship('OrdemProduto', back_populates='ordem')

class Produto(Base):
    __tablename__ = 'produto'
    
    id_produto = Column(Integer, primary_key=True)
    nome = Column(String(100))
    preco = Column(DECIMAL(10, 2))
    tipo_produto = Column(String(50))

    ordens = relationship('OrdemProduto', back_populates='produto')

class OrdemProduto(Base):
    __tablename__ = 'ordem_produto'
    
    id_ordem_de_servico = Column(Integer, ForeignKey('ordem_de_servico.id_ordem_de_servico'), primary_key=True)
    id_produto = Column(Integer, ForeignKey('produto.id_produto'), primary_key=True)
    quantidade = Column(Integer, default=1)

    ordem = relationship('OrdemDeServico', back_populates='produtos')
    produto = relationship('Produto', back_populates='ordens')
