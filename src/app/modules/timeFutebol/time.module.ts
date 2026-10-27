import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeFutebolGridComponent } from './components/time-grid/time-grid.component';
import { TimeFutebolFormComponent } from './components/time-form/time-form.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TimeFutebolRoutingModule } from './time-routing.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    TimeFutebolGridComponent,
    TimeFutebolFormComponent
  ],
  imports: [
    TimeFutebolRoutingModule,
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
    DropdownModule,
  ]
})
export class TimeFutebolModule { }
