odoo.define('bi_pos.pos_button_restrict', function (require) {
    "use strict";

    const PosGlobalState = require('point_of_sale.models').PosGlobalState;
    const Registries = require('point_of_sale.Registries');

    const PosButtonRestrict = (PosGlobalState) =>
        class PosButtonRestrict extends PosGlobalState {
            async _processData(loadedData) {
                await super._processData(...arguments);
                this.visible_backspace_btn = loadedData['visible_backspace_btn'];
            }
        };

    Registries.Model.extend(PosGlobalState, PosButtonRestrict);
});
