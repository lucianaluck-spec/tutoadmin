import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReligiaoGridComponent } from './components/religiao-grid/religiao-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: ReligiaoGridComponent,
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
export class ReligiaoRoutingModule { }
