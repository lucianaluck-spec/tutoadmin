import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegranteGridComponent } from './components/integrante-grid/integrante-grid.component';
import { IntegranteFormComponent } from './components/integrante-form/integrante-form.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { IntegranteRoutingModule } from './integrante-routing.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { Image } from 'primeng/image';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { SharedDirectiveModule } from '@/shared/shared-directive.module';


@NgModule({
  declarations: [
    IntegranteGridComponent,
    IntegranteFormComponent
  ],
  imports: [
    IntegranteRoutingModule,
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
    DropdownModule,
    CheckboxModule,
    InputNumberModule,
    FileUploadModule,
    InputMaskModule,
    GalleriaModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    ButtonModule,
    SharedDirectiveModule
  ]
})
export class IntegranteModule { }
