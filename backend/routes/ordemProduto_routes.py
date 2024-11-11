from flask import Blueprint, request, jsonify
from models import db, ordemProduto, produto, ordemDeServico    

ordemProduto_routes = Blueprint('ordemProduto', __name__)

@ordemProduto_routes.route('/ordens_produtos', methods=['GET'])
def get_ordens_produtos():
    ordens_produtos = ordemProduto.query.all()
    return jsonify([ordem.to_dict() for ordem in ordens_produtos])

@ordemProduto_routes.route('/ordens_produtos/<int:id>', methods=['GET'])
def get_ordem_produto(id_ordem_produto):
    ordem_produto = ordemProduto.query.get_or_404(id_ordem_produto)
    return jsonify(ordem_produto.to_dict())

@ordemProduto_routes.route('/ordens_produtos', methods=['POST'])
def create_ordem_produto():
    data = request.json

    ordem = ordemDeServico.query.get(data['id_ordem_de_servico'])
    if not ordem:
        return jsonify({"error": "Ordem de serviço não encontrada"}), 404

    produto = produto.query.get(data['id_produto'])
    if not produto:
        return jsonify({"error": "Produto não encontrado"}), 404

    ordem_produto = ordemProduto(
        id_ordem_de_servico=data['id_ordem_de_servico'],
        id_produto=data['id_produto'],
        quantidade=data.get('quantidade', 1)
    )
    db.session.add(ordem_produto)
    db.session.commit()
    return jsonify(ordem_produto.to_dict()), 201

@ordemProduto_routes.route('/ordens_produtos/<int:id>', methods=['DELETE'])
def delete_ordem_produto(id_ordem_produto):
    ordem_produto = ordemProduto.query.get_or_404(id_ordem_produto)
    db.session.delete(ordem_produto)
    db.session.commit() 
    return jsonify({'message': 'Ordem de Serviço excluída com sucesso'}), 200