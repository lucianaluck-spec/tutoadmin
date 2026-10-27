import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstiloMusicalGridComponent } from './components/estiloMusical-grid/estiloMusical-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: EstiloMusicalGridComponent,
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
export class EstiloMusicalRoutingModule { }
