import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabilitacaoGridComponent } from './components/habilitacao-grid/habilitacao-grid.component';
import { HabilitacaoFormComponent } from './components/habilitacao-form/habilitacao-form.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { HabilitacaoRoutingModule } from './habilitacao-routing.module';
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
    HabilitacaoGridComponent,
    HabilitacaoFormComponent
  ],
  imports: [
    HabilitacaoRoutingModule,
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
export class HabilitacaoModule { }
