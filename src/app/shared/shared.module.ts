import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppMessageService } from './services/app-message.service';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    AppMessageService
  ],
  imports: [
    CommonModule,
    MessagesModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class SharedModule { }
