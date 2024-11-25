from .cliente_routes import cliente_routes
from .ordemDeServico_routes import ordemDeServico_routes
from .ordemProduto_routes import ordemProduto_routes
from .produto_routes import produto_routes
from .usuario_routes import usuario_routes

def init_app(app):
    app.register_blueprint(cliente_routes, url_prefix='/api')
    app.register_blueprint(ordemDeServico_routes, url_prefix='/api')
    app.register_blueprint(ordemProduto_routes, url_prefix='/api')
    app.register_blueprint(produto_routes, url_prefix='/api')
    app.register_blueprint(usuario_routes, url_prefix='/api')

