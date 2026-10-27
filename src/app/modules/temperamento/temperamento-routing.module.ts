import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemperamentoGridComponent } from './components/temperamento-grid/temperamento-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: TemperamentoGridComponent,
      data: {
        breadcrumb: null,
      },
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemperamentoRoutingModule { }
