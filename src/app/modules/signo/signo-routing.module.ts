import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignoGridComponent } from './components/signo-grid/signo-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: SignoGridComponent,
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
export class SignoRoutingModule { }
