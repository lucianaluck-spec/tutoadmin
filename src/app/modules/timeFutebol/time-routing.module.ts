import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeFutebolGridComponent } from './components/time-grid/time-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: TimeFutebolGridComponent,
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
export class TimeFutebolRoutingModule { }
