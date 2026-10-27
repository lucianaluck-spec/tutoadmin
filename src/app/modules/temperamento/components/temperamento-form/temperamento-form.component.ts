import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TemperamentoDTO } from '@/shared/model/temperamento.model';
import { TemperamentoService } from '@modules/temperamento/services/temperamento.service';

@Component({
  selector: 'temperamento-form',
  templateUrl: './temperamento-form.component.html',
  styleUrls: ['./temperamento-form.component.scss']
})

export class TemperamentoFormComponent implements OnInit {

  @Input('visible')
  formVisible: boolean;

  @Input('formData')
  initialFormData: TemperamentoDTO;

  @Output()
  afterSave = new EventEmitter<TemperamentoDTO>();

  submitted = false;
  editing: boolean;
  title: string;
  detailError: string = '';

  form: FormGroup = new FormGroup({
    id: new FormControl({value: null, disabled: true}),
    descricao:  new FormControl('', [Validators.required]),
    informacao:  new FormControl('')

  });

  constructor(
    private messageService: AppMessageService,
    private temperamentoService: TemperamentoService)
  {}

  private loadFormData(): void {
    this.form.patchValue(this.initialFormData);
  }

  private extractFormData(): TemperamentoDTO {
    return { ...this.initialFormData, ...this.form.value };
  }

  private resetForm() {
    this.form.reset();
    this.submitted = false;
    this.editing = false;
    this.title = null;
    this.initialFormData = null;
  }

  private create(toCreate: TemperamentoDTO) {
    this.temperamentoService.create(toCreate)
    .then(data => {
      this.messageService.showSuccess('Novo registro incluído com sucesso!');
      this.hideDialog();
      this.afterSave.emit(toCreate);
    })
    .catch(e =>{
      console.error(e);
      this.messageService.showApiError(e.error);
    });
  }

  private update(toUpdate: TemperamentoDTO) {
    this.temperamentoService.update(toUpdate)
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

  showDialog(record?: TemperamentoDTO): void {
    this.editing = record !== null && record !== undefined;
    this.initialFormData = record || new TemperamentoDTO();
    this.title = this.editing ? 'Editar' : 'Criar Novo';
    this.form = new FormGroup({
      id: new FormControl({value: null, disabled: true}),
      descricao:  new FormControl('', [Validators.required]),
      informacao:  new FormControl(''),
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
    } else {
      this.create(toSave);
    }
  }
}
