# -*- coding: utf-8 -*-

from odoo import models, fields, api

class MrpProduction(models.Model):
    _inherit = 'mrp.production'
    
    progress = fields.Float('Progreso', compute='_compute_progress', store=True)

    @api.depends('qty_produced','product_qty')
    def _compute_progress(self):
        for record in self:
            if record.product_qty != 0:
                record.progress = (record.qty_produced/record.product_qty)*100
            else:
                record.progress = 0