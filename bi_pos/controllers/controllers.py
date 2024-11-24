# -*- coding: utf-8 -*-
# from odoo import http


# class BiPos(http.Controller):
#     @http.route('/bi_pos/bi_pos', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/bi_pos/bi_pos/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('bi_pos.listing', {
#             'root': '/bi_pos/bi_pos',
#             'objects': http.request.env['bi_pos.bi_pos'].search([]),
#         })

#     @http.route('/bi_pos/bi_pos/objects/<model("bi_pos.bi_pos"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('bi_pos.object', {
#             'object': obj
#         })
