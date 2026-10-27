import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoGridComponent } from './components/grupo-grid/grupo-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: GrupoGridComponent,
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
export class GrupoRoutingModule { }
