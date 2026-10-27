import { Injectable } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorDTO } from '../model/error.model';
import { ApiErrorHandlingService } from './api-error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class AppMessageService {

  private readonly _LIFE = 5000;
  private readonly _SUCCESS_SEVERITY = 'success';
  private readonly _SUCCESS_SUMMARY = 'Sucesso';
  private readonly _WARNING_SEVERITY = 'warn';
  private readonly _WARNING_SUMMARY = 'Alerta';
  private readonly _ERROR_SEVERITY = 'error';
  private readonly _ERROR_SUMMARY = 'Erro';

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private apiErrorHandlingService: ApiErrorHandlingService
  ) {}

  private _showMessage(severity: string, summary: string, detail: string): void {
    this.messageService.add({severity, summary, detail, life: this._LIFE});
  }

  showSuccess(message: string, summary?: string): void {
    this._showMessage(this._SUCCESS_SEVERITY, summary || this._SUCCESS_SUMMARY, message);
  }

  showWarn(message: string, summary?: string): void {
    this._showMessage(this._WARNING_SEVERITY, summary || this._WARNING_SUMMARY, message);
  }

  showError(message: string, summary?: string): void {
    this._showMessage(this._ERROR_SEVERITY, summary || this._ERROR_SUMMARY, message);
  }

  showApiError(error: ErrorDTO): void {
    const message = this.apiErrorHandlingService.extractMessageFromError(error);
    this._showMessage(this._ERROR_SEVERITY, message.summary || this._ERROR_SUMMARY, message.detail);
  }

  showCustomMessage(severity: string, summary: string, detail: string): void {
    this._showMessage(severity, summary, detail);
  }

  showConfirmation(message: string, accept: Function, header?: string) {
    this.confirmationService.confirm({
        message,
        header: header || 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept
    });
  }
}
