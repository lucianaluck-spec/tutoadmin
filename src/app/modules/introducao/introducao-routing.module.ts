import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroducaoGridComponent } from './components/introducao-grid/introducao-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: IntroducaoGridComponent,
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
export class IntroducaoRoutingModule { }
