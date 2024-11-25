from flask import Blueprint, request, jsonify
from models import db, usuario
from werkzeug.security import generate_password_hash, check_password_hash

usuario_routes = Blueprint('usuario', __name__)

@usuario_routes.route('/usuario', methods=['GET'])
def get_usuarios():
    usuario_instance = usuario.Usuario.query.all()
    return jsonify([usuario_.to_dict() for usuario_ in usuario_instance])


@usuario_routes.route('/usuario/<int:id>', methods=['GET'])
def get_usuario(id_usuario):
    usuario_instance = usuario.Usuario.query.get_or_404(id_usuario)
    return jsonify(usuario_instance.to_dict())

@usuario_routes.route('/usuarios', methods=['POST'])
def create_usuario():
    data = request.json
    if 'email' not in data or 'senha' not in data or 'tipo_usuario' not in data:
        return jsonify({"error": "Faltam dados obrigatórios"}), 400
    hashed_password = generate_password_hash(data['senha'], method='pbkdf2:sha256')
    novo_usuario = usuario.Usuario(email=data['email'], tipo_usuario=data['tipo_usuario'], senha=hashed_password)

    db.session.add(novo_usuario)
    db.session.commit()

    return jsonify(novo_usuario.to_dict()), 201

@usuario_routes.route('/usuario/<int:id>', methods=['PUT'])
def update_usuario(id_usuario):
    usuario_instance = usuario.Usuario.query.get_or_404(id_usuario)
    data = request.json

    usuario.email = data.get('email', usuario.email)
    usuario.tipo_usuario = data.get('tipo_usuario', usuario.tipo_usuario)

    if 'senha' in data:
        hashed_password = generate_password_hash(data['senha'], method='pbkdf2:sha256')
        usuario.senha = hashed_password

    db.session.commit()
    return jsonify(usuario.to_dict())

@usuario_routes.route('/usuario/<int:id>', methods=['DELETE'])
def delete_usuario(id_usuario):
    usuario_instance = usuario.query.get_or_404(id_usuario)
    db.session.delete(usuario)
    db.session.commit()
    return jsonify({'message': 'Usuário excluído com sucesso'}), 200

@usuario_routes.route('/login', methods=['POST'])
def login():
    data = request.json
    usuario_instance = usuario.Usuario.query.filter_by(email=data['email']).first()

    if usuario and check_password_hash(usuario_instance.senha, data['senha']):
        return jsonify({'message': 'Login bem-sucedido'}), 200
    else:
        return jsonify({'message': 'Credenciais inválidas'}), 401