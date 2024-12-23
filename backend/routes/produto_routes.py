from flask import Blueprint, request, jsonify
from models import db, produto

produto_routes = Blueprint('produto', __name__)

@produto_routes.route('/produtos', methods=['GET'])
def get_produtos():
    produtos = produto.Produto.query.all()
    return jsonify([produto.to_dict() for produto in produtos])

@produto_routes.route('/produtos/<int:id>', methods=['GET'])
def get_produto(id_produto):
    produto = produto.query.get_or_404(id_produto)
    return jsonify(produto.to_dict())

@produto_routes.route('/produtos', methods=['POST'])
def create_produto():
    data = request.json

    novo_produto = produto.Produto(
        nome=data['nome'],
        preco=float(data['valor']),
        tipo_produto=data['tipo']
    )
    db.session.add(novo_produto)
    db.session.commit()
    return jsonify(novo_produto.to_dict()), 201

@produto_routes.route('/produtos/<int:id>', methods=['PUT'])
def update_produto(id_produto):
    produto = produto.query.get_or_404(id_produto)
    data = request.json
    produto.preco = data.get('preco', produto.preco)

    db.session.commit()
    return jsonify(produto.to_dict())

@produto_routes.route('/produtos/<int:id>', methods=['DELETE'])  
def delete_produto(id_produto):
    produto = produto.query.get_or_404(id_produto)
    db.session.delete(produto)  
    db.session.commit()
    return jsonify({'message': 'Produto excluído com sucesso'}), 200
