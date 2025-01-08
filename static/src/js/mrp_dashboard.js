/** @odoo-module **/

import { registry } from "@web/core/registry";
import { AbstractAwaitableAction } from "@web/webclient/actions/abstract_awaitable_action";

class MrpDashboard extends AbstractAwaitableAction {
    setup() {
        super.setup();
        // Aquí puedes agregar lógica adicional si la necesitas.
    }
}

MrpDashboard.tag = "mrp_production_dashboard";  // Asegúrate que este tag coincida con lo que definiste en el views/mrp_production_views.xml

registry.category("actions").add("mrp_production_dashboard", MrpDashboard);