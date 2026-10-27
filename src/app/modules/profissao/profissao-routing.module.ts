import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfissaoGridComponent } from './components/profissao-grid/profissao-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: ProfissaoGridComponent,
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
export class ProfissaoRoutingModule { }
