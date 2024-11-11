from flask import Blueprint, request, jsonify
from models import db, ordemDeServico, cliente, usuario

ordemDeServico_routes = Blueprint('ordemDeServico', __name__)


@ordemDeServico_routes.route('/ordens-de-servico', methods=['GET'])
def get_ordens_de_servico():
    ordens = ordemDeServico.query.all()
    return jsonify([ordem.to_dict() for ordem in ordens])

@ordemDeServico_routes.route('/ordens-de-servico/<int:id>', methods=['GET'])
def get_ordem_de_servico(id_ordem_de_servico):
    ordem = ordemDeServico.query.get_or_404(id_ordem_de_servico)
    return jsonify(ordem.to_dict())

@ordemDeServico_routes.route('/ordens-de-servico', methods=['POST'])
def create_ordem_de_servico():
    data = request.json

    cliente = cliente.query.get(data['id_cliente'])
    if not cliente: 
        return jsonify({'error': 'Cliente não encontrado'}), 404
    
    usuario = usuario.query.get(data['id_usuario'])
    if not usuario: 
        return jsonify({'error': 'Usuário não encontrado'}), 404

    ordem = ordemDeServico(
        descricao=data['descricao'],
        marca=data['marca'],
        modelo=data['modelo'],
        valor_total=data['valor_total'],
        status=data['status'],
        tipo_os=data['tipo_os'],
        objeto_os=data['objeto_os'],
        data=data['data'],
        hora=data['hora'],
        id_cliente=data['id_cliente'],
        id_usuario=data['id_usuario']
    )

    db.session.add(ordem)
    db.session.commit()

    return jsonify(ordem.to_dict()), 201

@ordemDeServico_routes.route('/ordens-de-servico/<int:id>', methods=['PUT'])
def update_ordem_de_servico(id_ordem_de_servico):
    ordem = ordemDeServico.query.get_or_404(id_ordem_de_servico)
    data = request.json

    ordem.descricao = data.get('descricao', ordem.descricao)
    ordem.marca = data.get('marca', ordem.marca)
    ordem.modelo = data.get('modelo', ordem.modelo)
    ordem.valor_total = data.get('valor_total', ordem.valor_total)
    ordem.status = data.get('status', ordem.status)
    ordem.tipo_os = data.get('tipo_os', ordem.tipo_os)
    ordem.objeto_os = data.get('objeto_os', ordem.objeto_os)
    ordem.id_usuario = data.get('id_usuario', ordem.id_usuario)

    db.session.commit()
    return jsonify(ordem.to_dict())

@ordemDeServico_routes.route('/ordens-de-servico/<int:id>', methods=['DELETE'])
def delete_ordem_de_servico(id_ordem_de_servico):
    ordem = ordemDeServico.query.get_or_404(id_ordem_de_servico)
    db.session.delete(ordem)
    db.session.commit()
    return jsonify({'message': 'Ordem de Serviço excluída com sucesso'}), 200
