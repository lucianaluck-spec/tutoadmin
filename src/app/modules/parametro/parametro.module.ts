import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametroFormComponent } from './components/parametro-form/parametro-form.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ParametroRoutingModule } from './parametro-routing.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { SharedDirectiveModule } from '@/shared/shared-directive.module';

@NgModule({
  declarations: [
   ParametroFormComponent
  ],
  imports: [
    ParametroRoutingModule,
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
    CalendarModule,
    SharedDirectiveModule
  ]
})
export class ParametroModule { }
