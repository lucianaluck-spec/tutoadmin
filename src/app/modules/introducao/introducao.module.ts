import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroducaoGridComponent } from './components/introducao-grid/introducao-grid.component';
import { IntroducaoFormComponent } from './components/introducao-form/introducao-form.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { IntroducaoRoutingModule } from './introducao-routing.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { SharedDirectiveModule } from '@/shared/shared-directive.module';

@NgModule({
  declarations: [
    IntroducaoGridComponent,
    IntroducaoFormComponent
  ],
  imports: [
    IntroducaoRoutingModule,
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
    SharedDirectiveModule
  ]
})
export class IntroducaoModule { }
