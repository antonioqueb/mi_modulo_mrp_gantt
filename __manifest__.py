{
    'name': "MRP Gantt View",
    'summary': """
        Agrega una vista de Gantt a las órdenes de producción del módulo MRP.
    """,
    'description': """
        Este módulo agrega una vista de Gantt a las órdenes de producción
        del módulo MRP para una mejor visualización y gestión de la planificación.
    """,
    'author': "Alphaqueb Consulting SAS",
    'website': "http://alphaqueb.com",
    'category': 'Manufacturing',
    'version': '0.1',
    'depends': ['mrp', 'web'],
    'data': [
        'views/mrp_production_views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'mi_modulo_mrp_gantt/static/src/js/mrp_dashboard.js',
            'mi_modulo_mrp_gantt/static/src/xml/mrp_dashboard.xml',
        ],
    }
}