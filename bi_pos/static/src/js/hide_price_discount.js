odoo.define('bi_pos.hide_price_discount', function (require) {
    "use strict";

    var PosModel = require('point_of_sale.PosModel');
    var _super = PosModel.prototype;

    PosModel = PosModel.extend({
        load_server_data: function () {
            var self = this;
            return _super.load_server_data.apply(this, arguments).then(function () {
                // Menyembunyikan tombol diskon jika teksnya mengandung '% Disc'
                var discButton = document.querySelector("button.mode-button");
                if (discButton && discButton.textContent.includes('% Disc')) {
                    discButton.style.display = 'none';
                }
            });
        },
    });
});
