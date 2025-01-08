/** @odoo-module **/

import { registry } from "@web/core/registry";
import { AbstractAwaitableAction } from "@web/webclient/actions/abstract_awaitable_action";

class MrpDashboard extends AbstractAwaitableAction {
    setup() {
        super.setup();
    }
}

MrpDashboard.tag = "mrp_production_dashboard";

registry.category("actions").add("mrp_production_dashboard", MrpDashboard);