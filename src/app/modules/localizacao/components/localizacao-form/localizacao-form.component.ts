import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalizacaoDTO } from '@/shared/model/localizacao.model';
import { LocalizacaoService } from '@modules/localizacao/services/localizacao.service';

@Component({
  selector: 'localizacao-form',
  templateUrl: './localizacao-form.component.html',
  styleUrls: ['./localizacao-form.component.scss']
})

export class LocalizacaoFormComponent implements OnInit {

  @Input('visible')
  formVisible: boolean;

  @Input('formData')
  initialFormData: LocalizacaoDTO;

  @Output()
  afterSave = new EventEmitter<LocalizacaoDTO>();

  submitted = false;
  editing: boolean;
  title: string;
  detailError: string = '';

  form: FormGroup = new FormGroup({
    id: new FormControl({value: null, disabled: true}),
    nome:  new FormControl('', [Validators.required]),
    estado:  new FormControl(''),
    pais:  new FormControl('')

  });

  constructor(
    private messageService: AppMessageService,
    private LocalizacaoService: LocalizacaoService)
  {}

  private loadFormData(): void {
    this.form.patchValue(this.initialFormData);
  }

  private extractFormData(): LocalizacaoDTO {
    return { ...this.initialFormData, ...this.form.value };
  }

  private resetForm() {
    this.form.reset();
    this.submitted = false;
    this.editing = false;
    this.title = null;
    this.initialFormData = null;
  }

  private create(toCreate: LocalizacaoDTO) {
    this.LocalizacaoService.create(toCreate)
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

  private update(toUpdate: LocalizacaoDTO) {
    this.LocalizacaoService.update(toUpdate)
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

  showDialog(record?: LocalizacaoDTO): void {
    this.editing = record !== null && record !== undefined;
    this.initialFormData = record || new LocalizacaoDTO();
    this.title = this.editing ? 'Editar' : 'Criar Novo';
    this.form = new FormGroup({
      id: new FormControl({value: null, disabled: true}),
      nome:  new FormControl('', [Validators.required]),
      estado:  new FormControl(''),
      pais:  new FormControl(''),
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
