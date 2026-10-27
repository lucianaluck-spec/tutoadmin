import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabilitacaoGridComponent } from './components/habilitacao-grid/habilitacao-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: HabilitacaoGridComponent,
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
export class HabilitacaoRoutingModule { }
