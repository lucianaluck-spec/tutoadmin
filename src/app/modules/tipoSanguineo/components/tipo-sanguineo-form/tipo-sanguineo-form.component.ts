import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoSanguineoDTO } from '@/shared/model/tipoSanguineo.model';
import { TipoSanguineoService } from '@modules/tipoSanguineo/services/tipo-sanguineo.service';

@Component({
  selector: 'tipo-sanguineo-form',
  templateUrl: './tipo-sanguineo-form.component.html',
  styleUrls: ['./tipo-sanguineo-form.component.scss']
})

export class TipoSanguineoFormComponent implements OnInit {

  @Input('visible')
  formVisible: boolean;

  @Input('formData')
  initialFormData: TipoSanguineoDTO;

  @Output()
  afterSave = new EventEmitter<TipoSanguineoDTO>();

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
    private tiposanguineoService: TipoSanguineoService)
  {}

  private loadFormData(): void {
    this.form.patchValue(this.initialFormData);
  }

  private extractFormData(): TipoSanguineoDTO {
    return { ...this.initialFormData, ...this.form.value };
  }

  private resetForm() {
    this.form.reset();
    this.submitted = false;
    this.editing = false;
    this.title = null;
    this.initialFormData = null;
  }

  private create(toCreate: TipoSanguineoDTO) {
    this.tiposanguineoService.create(toCreate)
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

  private update(toUpdate: TipoSanguineoDTO) {
    this.tiposanguineoService.update(toUpdate)
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

  showDialog(record?: TipoSanguineoDTO): void {
    this.editing = record !== null && record !== undefined;
    this.initialFormData = record || new TipoSanguineoDTO();
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
