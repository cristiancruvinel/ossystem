from flask import Blueprint, request, jsonify
import requests
from models import db, cliente

cliente_routes = Blueprint('cliente', __name__)

@cliente_routes.route('/estados', methods=['GET'])
def listar_estados():
    url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    response = requests.get(url)
    if response.status_code != 200:
        return jsonify({'error': 'Erro ao buscar estados'}), 500
    estados = response.json()
    return jsonify(estados)

@cliente_routes.route('/cidades/<estado_id>', methods=['GET'])
def listar_cidades(estado_id):
    url = f"https://servicodados.ibge.gov.br/api/v1/localidades/estados/{estado_id}/municipios"
    response = requests.get(url)
    if response.status_code != 200:
        return jsonify({'error': 'Erro ao buscar cidades'}), 500
    cidades = response.json()
    return jsonify(cidades)

@cliente_routes.route('/clientes', methods=['GET'])
def get_clientes():
    nome = request.args.get('nome')
    if nome:
        cliente_instance = cliente.Cliente.query.filter(cliente.Cliente.nome.ilike(f'%{nome}%')).all()
    else:
        cliente_instance = cliente.Cliente.query.all()
    return jsonify([cliente.to_dict() for cliente in cliente_instance])


@cliente_routes.route('/clientes/<int:id>', methods=['GET'])
def get_cliente(id):
    cliente_instance = cliente.Cliente.query.get_or_404(id)
    return jsonify(cliente_instance.to_dict())

@cliente_routes.route('/clientes', methods=['POST'])
def create_cliente():
    data = request.json

    if cliente.Cliente.query.filter_by(cpf_cnpj=data['cpfCnpj']).first():
        return jsonify({'error': 'CPF/CNPJ já cadastrado'}), 400

    cliente_instance = cliente.Cliente(
        cpf_cnpj=data['cpfCnpj'],
        nome=data['nome'],
        email=data['email'],
        telefone=data['telefone'],
        endereco=data['endereco'],
        cidade=data['cidade'],
        estado=data['estado']
    )

    db.session.add(cliente_instance)
    db.session.commit()

    return jsonify(cliente_instance.to_dict()), 201  

@cliente_routes.route('/clientes/<int:id>', methods=['PUT'])
def update_cliente(id):
    cliente_update = cliente.Cliente.query.get_or_404(id)
    data = request.json

    cliente_update.email = data.get('email', cliente.Cliente.email)
    cliente_update.telefone = data.get('telefone', cliente.Cliente.telefone)
    cliente_update.endereco = data.get('endereco', cliente.Cliente.endereco)
    cliente_update.cidade = data.get('cidade', cliente.Cliente.cidade)
    cliente_update.estado = data.get('estado', cliente.Cliente.estado)

    db.session.commit()
    return jsonify(cliente_update.to_dict())

@cliente_routes.route('/clientes/<int:id>', methods=['DELETE'])
def delete_cliente(id_cliente):
    cliente = cliente.query.get_or_404(id_cliente)
    db.session.delete(cliente)
    db.session.commit()
    return jsonify({'message': 'Cliente excluído com sucesso'}), 200