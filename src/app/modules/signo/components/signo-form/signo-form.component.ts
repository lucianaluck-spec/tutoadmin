import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignoDTO } from '@/shared/model/signo.model';
import { SignoService } from '@modules/signo/services/signo.service';
import { AppComponentTabEnter } from '@/config/appComponentTabEnter';
import { HostListener } from '@angular/core';

@Component({
  selector: 'signo-form',
  templateUrl: './signo-form.component.html',
  styleUrls: ['./signo-form.component.scss']
})

export class SignoFormComponent  extends AppComponentTabEnter implements OnInit {

   @HostListener('keydown.enter', ['$event'])
  onEnterKey(event: KeyboardEvent) {
    // Verifica se o alvo é o dropdown que você quer bloquear
    
      event.preventDefault();
      event.stopPropagation();
    
  }

  @Input('visible')
  formVisible: boolean;

  @Input('formData')
  initialFormData: SignoDTO;

  @Output()
  afterSave = new EventEmitter<SignoDTO>();

  submitted = false;
  editing: boolean;
  title: string;
  detailError: string = '';

   diaOptions: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09','10',
                           '11', '12', '13', '14', '15', '16', '17', '18', '19','20',
                           '21', '22', '23', '24', '25', '26', '27', '28', '29','30', '31'
   ];

   mesOptions: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09','10',
                           '11', '12'
   ];

  form: FormGroup = new FormGroup({
    id: new FormControl({value: null, disabled: true}),
    nome:  new FormControl('', [Validators.required]),
    diaPeriodo1:  new FormControl(''),
    mesPeriodo1:  new FormControl(''),
    diaPeriodo2:  new FormControl(''),
    mesPeriodo2:  new FormControl('')

  });

  constructor(
    private messageService: AppMessageService,
    private signoService: SignoService)
  { super() }

  private loadFormData(): void {
    this.form.patchValue(this.initialFormData);
  }

  private extractFormData(): SignoDTO {
    return { ...this.initialFormData, ...this.form.value };
  }

  private resetForm() {
    this.form.reset();
    this.submitted = false;
    this.editing = false;
    this.title = null;
    this.initialFormData = null;
  }

  private create(toCreate: SignoDTO) {
    this.signoService.create(toCreate)
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

  private update(toUpdate: SignoDTO) {
    this.signoService.update(toUpdate)
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

  showDialog(record?: SignoDTO): void {
    this.editing = record !== null && record !== undefined;
    this.initialFormData = record || new SignoDTO();
    this.title = this.editing ? 'Editar' : 'Criar Novo';
    this.form = new FormGroup({
      id: new FormControl({value: null, disabled: true}),
      nome:  new FormControl('', [Validators.required]),
      diaPeriodo1:  new FormControl(''),
      mesPeriodo1:  new FormControl(''),
       diaPeriodo2:  new FormControl(''),
      mesPeriodo2:  new FormControl(''),
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
