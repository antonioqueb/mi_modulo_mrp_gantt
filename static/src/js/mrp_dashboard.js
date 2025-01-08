/** @odoo-module */

import { registry } from '@web/core/registry';
import { Component, useState, onWillStart } from '@odoo/owl';
import { useService } from '@web/core/utils/hooks';
import { loadJS } from "@web/core/assets";

const MRP_GANTT_DASHBOARD_TAG = "mrp_gantt.mrp_gantt_dashboard";

export class MrpGanttDashboard extends Component {
    setup() {
        this.orm = useService("orm");
        this.state = useState({
            productions: [],
            loading: true,
            error: null,
        });
        
        onWillStart(async () => {
            try {
                await loadJS('/web/static/lib/frappe-gantt/frappe-gantt.min.js');
                await this.loadData();
            } catch (err) {
               this.state.error = "Error loading libraries"
               console.error("Error loading external library or data:", err);
            } finally{
                this.state.loading = false;
            }

        });
    }

    async loadData() {
      try {
          const records = await this.orm.searchRead('mrp.production', [], ['name', 'date_planned_start', 'date_planned_finished', 'progress']);
           this.state.productions = records
           this.renderGantt();
      } catch (err) {
            this.state.error = "Error Loading data"
          console.error("Error fetching mrp.production data:", err);
      }
    }


    renderGantt() {
      if (!this.state.productions || this.state.productions.length === 0) {
            return;
        }

      const tasks = this.state.productions.map(record => ({
          id: record.id,
          name: record.name,
          start: record.date_planned_start,
          end: record.date_planned_finished,
          progress: record.progress,
      }));

        const gantt = new Gantt(".gantt-container", tasks, {
            on_click: (task) => {
                console.log(task)
             },
           on_date_change: (task, start, end) => {
                console.log('Date changed:', task, start, end);
                 this.updateProductionDates(task.id, start, end)
              },

          });
        }


      async  updateProductionDates(recordId, startDate, endDate){
              try {
                    await this.orm.write("mrp.production", [recordId], {
                        date_planned_start: startDate,
                        date_planned_finished: endDate
                     });
                    this.loadData();
                  } catch(err){
                        console.error("Error updating dates:", err);
                   }

        }
    }


MrpGanttDashboard.template = "mi_modulo_mrp_gantt.MrpGanttDashboard";
registry.category("actions").add(MRP_GANTT_DASHBOARD_TAG, MrpGanttDashboard);