{
    'name': 'MRP Gantt View',
    'version': '1.0',
    'summary': 'Custom Gantt View for MRP',
    'description': 'This module adds a Gantt view to the MRP module.',
    'category': 'Manufacturing',
    'author': 'Your Name',
    'website': 'yourwebsite.com',
    'depends': ['mrp', 'web'],
    'data': [
        'views/mrp_production_views.xml',
    ],
    'assets': {
         'web.assets_backend': [
            'mi_modulo_mrp_gantt/static/src/js/mrp_dashboard.js',
        ],
    },
    'license': 'LGPL-3',
}