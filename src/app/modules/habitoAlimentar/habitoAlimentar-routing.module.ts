import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitoAlimentarGridComponent } from './components/habitoAlimentar-grid/habitoAlimentar-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: HabitoAlimentarGridComponent,
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
export class HabitoAlimentarRoutingModule { }
