from flask import Blueprint, request, jsonify
from models import db, cliente

cliente_routes = Blueprint('cliente', __name__)

def validar_localidade(estado, cidade):
    url_estado = f"https://servicodados.ibge.gov.br/api/v2/malhas/BR/{estado}"
    response_estado = requests.get(url_estado)
    
    if response_estado.status_code != 200:
        return False  
    
    
    url_cidade = f"https://servicodados.ibge.gov.br/api/v2/localidades/municipios/{cidade}"
    response_cidade = requests.get(url_cidade)
    
    if response_cidade.status_code != 200:
        return False 
    
    return True 
@cliente_routes.route('/clientes', methods=['GET'])
def get_clientes():
    clientes = cliente.query.all()
    return jsonify([cliente.to_dict() for cliente in clientes])


@cliente_routes.route('/clientes/<int:id>', methods=['GET'])
def get_cliente(id_cliente):
    cliente = cliente.query.get_or_404(id_cliente)
    return jsonify(cliente.to_dict())

@cliente_routes.route('/clientes', methods=['POST'])
def create_cliente():
    data = request.json

    if cliente.query.filter_by(cpf_cnpj=data['cpf_cnpj']).first():
        return jsonify({'error': 'CPF/CNPJ já cadastrado'}), 400

    if not validar_localidade(data['estado'], data['cidade']):
       return jsonify({'error': 'Cidade ou estado inválido'}), 400

    cliente = cliente(
        cpf_cnpj=data['cpf_cnpj'],
        nome=data['nome'],
        email=data['email'],
        telefone=data['telefone'],
        endereco=data['endereco'],
        cidade=data['cidade'],
        estado=data['estado']
    )

    db.session.add(cliente)
    db.session.commit()

    return jsonify(cliente.to_dict()), 201  

@cliente_routes.route('/clientes/<int:id>', methods=['PUT'])
def update_cliente(id_cliente):
    cliente = cliente.query.get_or_404(id_cliente)
    data = request.json

    cliente.email = data.get('email', cliente.email)
    cliente.telefone = data.get('telefone', cliente.telefone)
    cliente.endereco = data.get('endereco', cliente.endereco)
    cliente.cidade = data.get('cidade', cliente.cidade)
    cliente.estado = data.get('estado', cliente.estado)

    db.session.commit()
    return jsonify(cliente.to_dict())

@cliente_routes.route('/clientes/<int:id>', methods=['DELETE'])
def delete_cliente(id_cliente):
    cliente = cliente.query.get_or_404(id_cliente)
    db.session.delete(cliente)
    db.session.commit()
    return jsonify({'message': 'Cliente excluído com sucesso'}), 200