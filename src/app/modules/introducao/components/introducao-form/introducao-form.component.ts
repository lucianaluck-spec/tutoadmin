import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntroducaoDTO } from '@/shared/model/introducao.model';
import { IntroducaoService } from '@modules/introducao/services/introducao.service';

@Component({
  selector: 'introducao-form',
  templateUrl: './introducao-form.component.html',
  styleUrls: ['./introducao-form.component.scss']
})

export class IntroducaoFormComponent implements OnInit {

  @Input('visible')
  formVisible: boolean;

  @Input('formData')
  initialFormData: IntroducaoDTO;

  @Output()
  afterSave = new EventEmitter<IntroducaoDTO>();

  submitted = false;
  editing: boolean;
  title: string;
  detailError: string = '';

  
  temaOptions: string[] = ['PROFISSAO', 'TIME', 'LOCALIZACAO', 'RELIGIAO','POLITICA', 'SIGNO', 
    'HABITO_ALIMENTAR', 'TEMPERAMENTO','GENERO_MUSICAL', 'TIPO_SANGUINEO'];

  form: FormGroup = new FormGroup({
    id: new FormControl({value: null, disabled: true}),
    tema:  new FormControl('', [Validators.required]),
    explicacao:  new FormControl('')

  });

  constructor(
    private messageService: AppMessageService,
    private introducaoService: IntroducaoService)
  {}

  private loadFormData(): void {
    this.form.patchValue(this.initialFormData);
  }

  private extractFormData(): IntroducaoDTO {
    return { ...this.initialFormData, ...this.form.value };
  }

  private resetForm() {
    this.form.reset();
    this.submitted = false;
    this.editing = false;
    this.title = null;
    this.initialFormData = null;
  }

  private create(toCreate: IntroducaoDTO) {
    this.introducaoService.create(toCreate)
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

  private update(toUpdate: IntroducaoDTO) {
    this.introducaoService.update(toUpdate)
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

  showDialog(record?: IntroducaoDTO): void {
    this.editing = record !== null && record !== undefined;
    this.initialFormData = record || new IntroducaoDTO();
    this.title = this.editing ? 'Editar' : 'Criar Novo';
    this.form = new FormGroup({
      id: new FormControl({value: null, disabled: true}),
      tema:  new FormControl('', [Validators.required]),
      explicacao:  new FormControl(''),
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
