import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntegranteGridComponent } from './components/integrante-grid/integrante-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: IntegranteGridComponent,
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
export class IntegranteRoutingModule { }
