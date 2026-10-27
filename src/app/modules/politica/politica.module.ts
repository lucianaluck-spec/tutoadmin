import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticaGridComponent } from './components/politica-grid/politica-grid.component';
import { PoliticaFormComponent } from './components/politica-form/politica-form.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { PoliticaRoutingModule } from './politica-routing.module';
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
    PoliticaGridComponent,
    PoliticaFormComponent
  ],
  imports: [
    PoliticaRoutingModule,
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
export class PoliticaModule { }
