import { ParametroDTO } from '@/shared/model/parametro.model';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParametroService } from '@modules/parametro/services/parametro.service';

@Component({
  selector: 'parametro-form',
  templateUrl: './parametro-form.component.html',
  styleUrls: ['./parametro-form.component.scss']
})
export class ParametroFormComponent implements OnInit {

  initialFormData: ParametroDTO;


  title: string;
  detailError: string = '';
  submitted = false;

  form: FormGroup = new FormGroup({

    'id': new FormControl({value: null, disabled: true}),
    'localOrigem': new FormControl('', [Validators.required]),
    'possivelChegada': new FormControl('', [Validators.required]),
    'nomeFamilia': new FormControl('', [Validators.required]),
    'resumoFamilia': new FormControl('', [Validators.required]),
    'urlMidiaPrincipal': new FormControl('', [Validators.required]),
    'msgAceito': new FormControl(''),
    'msgCancelamento': new FormControl(''),
   
  });

  constructor(
    private messageService: AppMessageService,
    private parametroService: ParametroService)
  {}

  private loadFormData(): void {
    this.form.patchValue(this.initialFormData);
  }

  private extractFormData(): ParametroDTO {
    return { ...this.initialFormData, ...this.form.value };
  }

  private update(toUpdate: ParametroDTO) {
    this.parametroService.update(toUpdate)
    .then(data => {
      this.messageService.showSuccess('Registro atualizado com sucesso!');
      
    })
    .catch(e => {
      console.error(e);
      this.messageService.showApiError(e.error);
    });
  }

  ngOnInit(): void {
    this.parametroService.find()
    .then(data => {
      this.initialFormData = data;
      this.loadFormData();
    })
    .catch(e => {
      console.error(e);
      this.messageService.showApiError(e.error);
    });
   
    
  }

  saveOnClick(): void {
    this.submitted = true;
    const toSave = this.extractFormData();

    if (this.form.invalid) {
      this.messageService.showWarn('Alguns campos estão inválidos', 'Falha na validação');
      return;
    }
   
      this.update(toSave);
   
  }
}
