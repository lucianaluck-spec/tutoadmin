import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StatusDTO } from '@/shared/model/integrante.model ';
import { StatusService } from '@modules/status/services/status.service';

@Component({
  selector: 'status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})

export class StatusFormComponent implements OnInit {

  @Input('visible')
  formVisible: boolean;

  @Input('formData')
  initialFormData: StatusDTO;

  @Output()
  afterSave = new EventEmitter<StatusDTO>();

  submitted = false;
  editing: boolean;
  title: string;
  detailError: string = '';

  form: FormGroup = new FormGroup({
    id: new FormControl({value: null, disabled: true}),
    descricao:  new FormControl('', [Validators.required]),
    nome:  new FormControl('')

  });

  constructor(
    private messageService: AppMessageService,
    private statusService: StatusService)
  {}

  private loadFormData(): void {
    this.form.patchValue(this.initialFormData);
  }

  private extractFormData(): StatusDTO {
    return { ...this.initialFormData, ...this.form.value };
  }

  private resetForm() {
    this.form.reset();
    this.submitted = false;
    this.editing = false;
    this.title = null;
    this.initialFormData = null;
  }

  private update(toUpdate: StatusDTO) {
    this.statusService.update(toUpdate)
    .then(data => {
      this.messageService.showSuccess('Registro atualizado com sucesso!');
      this.hideDialog();
      this.afterSave.emit(toUpdate);
    })
    .catch(e =>{
      console.error(e);
      this.messageService.showApiError(e.error);
    });
  }

  ngOnInit(): void {}

  showDialog(record?: StatusDTO): void {
    this.editing = record !== null && record !== undefined;
    this.initialFormData = record || new StatusDTO();
    this.title = this.editing ? 'Editar' : 'Criar Novo';
    this.form = new FormGroup({
      id: new FormControl({value: null, disabled: true}),
      descricao:  new FormControl('', [Validators.required]),
      nome:  new FormControl('', [Validators.required]),
    });
    this.loadFormData();
    this.formVisible = true;
  }

  hideDialog(): void {
    this.resetForm();
    this.formVisible = false;
  }

  cancelOnClick(): void {
    this.hideDialog();
  }

  saveOnClick(): void {
    this.submitted = true;
    const toSave = this.extractFormData();

    if (this.form.invalid) {
      this.messageService.showWarn('Alguns campos estão inválidos', 'Falha na validação');
      return;
    }

    if (this.editing) {
      this.update(toSave);
    } 
  }
}
