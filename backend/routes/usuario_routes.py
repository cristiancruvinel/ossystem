from flask import Blueprint, request, jsonify
from models import db, usuario
from werkzeug.security import generate_password_hash, check_password_hash

usuario_routes = Blueprint('usuario', __name__)

@usuario_routes.route('/usuarios', methods=['GET'])
def get_usuarios():
    usuarios = usuario.query.all()
    return jsonify([usuario.to_dict() for usuario in usuarios])

@usuario_routes.route('/usuarios/<int:id>', methods=['GET'])
def get_usuario(id_usuario):
    usuario = usuario.query.get_or_404(id_usuario)
    return jsonify(usuario.to_dict())

@usuario_routes.route('/usuarios', methods=['POST'])
def create_usuario():
    data = request.json
    hashed_password = generate_password_hash(data['senha'], method='sha256')
    usuario = usuario(email=data['email'], tipo_usuario=data['tipo_usuario'], senha=hashed_password)

    db.session.add(usuario)
    db.session.commit()

    return jsonify(usuario.to_dict()), 201

@usuario_routes.route('/usuarios/<int:id>', methods=['PUT'])
def update_usuario(id_usuario):
    usuario = usuario.query.get_or_404(id_usuario)
    data = request.json

    usuario.email = data.get('email', usuario.email)
    usuario.tipo_usuario = data.get('tipo_usuario', usuario.tipo_usuario)

    if 'senha' in data:
        hashed_password = generate_password_hash(data['senha'], method='sha256')
        usuario.senha = hashed_password

    db.session.commit()
    return jsonify(usuario.to_dict())

@usuario_routes.route('/usuarios/<int:id>', methods=['DELETE'])
def delete_usuario(id_usuario):
    usuario = usuario.query.get_or_404(id_usuario)
    db.session.delete(usuario)
    db.session.commit()
    return jsonify({'message': 'Usuário excluído com sucesso'}), 200

@usuario_routes.route('/login', methods=['POST'])
def login():
    data = request.json
    usuario = usuario.query.filter_by(email=data['email']).first()

    if usuario and check_password_hash(usuario.senha, data['senha']):
        return jsonify({'message': 'Login bem-sucedido'}), 200
    else:
        return jsonify({'message': 'Credenciais inválidas'}), 401