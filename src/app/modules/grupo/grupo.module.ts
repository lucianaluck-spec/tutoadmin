import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoGridComponent } from './components/grupo-grid/grupo-grid.component';
import { GrupoFormComponent } from './components/grupo-form/grupo-form.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { GrupoRoutingModule } from './grupo-routing.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { TabViewModule } from 'primeng/tabview';
import { Image } from 'primeng/image';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { SharedDirectiveModule } from '@/shared/shared-directive.module';

@NgModule({
  declarations: [
    GrupoGridComponent,
    GrupoFormComponent
  ],
  imports: [
    GrupoRoutingModule,
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
    FileUploadModule,
    ImageModule,
    CardModule,
    CarouselModule,
    TabViewModule,
    GalleriaModule,
    SharedDirectiveModule
  ]
})
export class GrupoModule { }
