import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizacaoGridComponent } from './components/localizacao-grid/localizacao-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: LocalizacaoGridComponent,
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
export class LocalizacaoRoutingModule { }
