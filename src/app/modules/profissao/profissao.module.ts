import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfissaoGridComponent } from './components/profissao-grid/profissao-grid.component';
import { ProfissaoFormComponent } from './components/profissao-form/profissao-form.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ProfissaoRoutingModule } from './profissao-routing.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SharedDirectiveModule } from '@/shared/shared-directive.module';

@NgModule({
  declarations: [
    ProfissaoGridComponent,
    ProfissaoFormComponent
  ],
  imports: [
    ProfissaoRoutingModule,
    CommonModule,
    TableModule,
    ToolbarModule,
    PanelModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    InputTextModule,
    InputNumberModule,
    SharedDirectiveModule
  ]
})
export class ProfissaoModule { }
