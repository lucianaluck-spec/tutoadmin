import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoliticaGridComponent } from './components/politica-grid/politica-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: PoliticaGridComponent,
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
export class PoliticaRoutingModule { }
