# -*- coding: utf-8 -*-

{
    'name': "MRP Gantt View",
    'summary': """
        Agrega una vista de Gantt a las órdenes de producción del módulo MRP.
    """,
    'description': """
        Este módulo agrega una vista de Gantt a las órdenes de producción
        del módulo MRP para una mejor visualización y gestión de la planificación.
    """,
    'author': "Tu Nombre",
    'website': "http://www.tuweb.com",
    'category': 'Manufacturing',
    'version': '0.1',
    'depends': ['mrp'],
    'data': [
        'views/mrp_production_views.xml',
    ],
}