/** @odoo-module **/

import { registry } from "@web/core/registry";
import { AbstractAwaitableAction } from "@web/webclient/actions/abstract_awaitable_action";
import { useService } from "@web/core/utils/hooks";

class MrpDashboard extends AbstractAwaitableAction {
    setup() {
        super.setup();
        this.actionService = useService("action");
    }
    async start() {
        this.actionService.doAction('action_mrp_production_gantt');
    }
}

MrpDashboard.tag = "mrp_production_dashboard";

registry.category("actions").add("mrp_production_dashboard", MrpDashboard);