import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusGridComponent } from './components/status-grid/status-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: StatusGridComponent,
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
export class StatusRoutingModule { }
