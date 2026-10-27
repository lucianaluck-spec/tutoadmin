import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametroFormComponent } from './components/parametro-form/parametro-form.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: ParametroFormComponent,
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
export class ParametroRoutingModule { }
