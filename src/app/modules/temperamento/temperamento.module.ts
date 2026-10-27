import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperamentoGridComponent } from './components/temperamento-grid/temperamento-grid.component';
import { TemperamentoFormComponent } from './components/temperamento-form/temperamento-form.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TemperamentoRoutingModule } from './temperamento-routing.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    TemperamentoGridComponent,
    TemperamentoFormComponent
  ],
  imports: [
    TemperamentoRoutingModule,
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
    InputNumberModule
  ]
})
export class TemperamentoModule { }
