/** @odoo-module */

import { registry } from '@web/core/registry';
import { Component, useState, onWillStart } from '@odoo/owl';
import { useService } from '@web/core/utils/hooks';
import { loadJS } from "@web/core/assets";

export class MrpGanttDashboard extends Component {
  setup() {
    this.orm = useService("orm");
    this.state = useState({
         productions: [],
    });

      onWillStart(async () => {
          await loadJS('/web/static/lib/frappe-gantt/frappe-gantt.min.js')
           this.loadData()
        });


  }
 async loadData(){
    const records = await this.orm.searchRead('mrp.production', [], ['name','date_planned_start', 'date_planned_finished', 'progress']);
        this.state.productions = records
       this.renderGantt()
  }


  renderGantt(){
    const tasks = this.state.productions.map(record => (
            {
                id: record.id,
                name: record.name,
                start: record.date_planned_start,
                end: record.date_planned_finished,
                progress: record.progress
            }
    ));
      const gantt = new Gantt(".gantt-container", tasks,{
         on_click: (task) => {
            console.log(task)
         }
      });

  }
}

MrpGanttDashboard.template = "mi_modulo_mrp_gantt.MrpGanttDashboard";

registry.category("actions").add("mrp_gantt.mrp_gantt_dashboard", MrpGanttDashboard);