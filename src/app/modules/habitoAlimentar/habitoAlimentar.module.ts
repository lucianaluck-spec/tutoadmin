import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitoAlimentarGridComponent } from './components/habitoAlimentar-grid/habitoAlimentar-grid.component';
import { HabitoAlimentarFormComponent } from './components/habitoAlimentar-form/habitoAlimentar-form.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { HabitoAlimentarRoutingModule } from './habitoAlimentar-routing.module';
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
    HabitoAlimentarGridComponent,
    HabitoAlimentarFormComponent
  ],
  imports: [
    HabitoAlimentarRoutingModule,
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
export class HabitoAlimentarModule { }
