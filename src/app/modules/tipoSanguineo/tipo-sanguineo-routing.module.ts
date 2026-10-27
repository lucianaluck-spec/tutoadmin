import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoSanguineoGridComponent } from './components/tipo-sanguineo-grid/tipo-sanguineo-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: TipoSanguineoGridComponent,
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
export class TipoSanguineoRoutingModule { }
