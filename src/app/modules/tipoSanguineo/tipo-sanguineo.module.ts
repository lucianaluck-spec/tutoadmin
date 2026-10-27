import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoSanguineoGridComponent } from './components/tipo-sanguineo-grid/tipo-sanguineo-grid.component';
import { TipoSanguineoFormComponent } from './components/tipo-sanguineo-form/tipo-sanguineo-form.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TipoSanguineoRoutingModule } from './tipo-sanguineo-routing.module';
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
    TipoSanguineoGridComponent,
    TipoSanguineoFormComponent
  ],
  imports: [
    TipoSanguineoRoutingModule,
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
export class TipoSanguineoModule { }
