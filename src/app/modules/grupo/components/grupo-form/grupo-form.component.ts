import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GrupoDTO, GrupoImagemDTO, ImagemView } from '@/shared/model/grupo.model';
import { GrupoService } from '@modules/grupo/services/grupo.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'grupo-form',
  templateUrl: './grupo-form.component.html',
  styleUrls: ['./grupo-form.component.scss']
})

export class GrupoFormComponent implements OnInit {


  responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4
    },
    {
      breakpoint: '575px',
      numVisible: 1
    }
  ];

  @Input('visible')
  formVisible: boolean;

  @Input('formData')
  initialFormData: GrupoDTO;

  @Output()
  afterSave = new EventEmitter<GrupoDTO>();

  uploadedFiles: any[] = [];
  imgRecourse: SafeResourceUrl;
  foto: String;
  fotosAProcessar: String[] = [];
  images: any[] = [];
  grupoImagem: GrupoImagemDTO;

  submitted = false;
  editing: boolean;
  title: string;
  detailError: string = '';
  idGrupo: number;
  descricaoGrupo: String;
  descricaoImagem: String;

  form: FormGroup = new FormGroup({
    id: new FormControl({ value: null, disabled: true }),
    descricao: new FormControl('', [Validators.required]),
    geracao: new FormControl(null, [Validators.required]),
    tipoSequencia: new FormControl('')
  });

  constructor(
    private messageService: AppMessageService,
    private grupoService: GrupoService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

  }

  showDialog(record?: GrupoDTO): void {
    this.editing = record !== null && record !== undefined;
    this.form.reset();
    this.initialFormData = this.editing ? record : new GrupoDTO();

    record = this.editing ? record : new GrupoDTO();
    this.title = this.editing ? 'Editar' : 'Criar Novo';
    this.loadFormData();
    this.formVisible = true;
    this.uploadedFiles = [];
    this.idGrupo = this.initialFormData.id;

    this.viewImages(record);

  }

  private loadFormData(): void {
    this.form.patchValue(this.initialFormData);
  }

  private extractFormData(): GrupoDTO {
    return { ...this.initialFormData, ...this.form.value };
  }

  private resetForm() {
    this.form.reset();
    this.submitted = false;
    this.editing = false;
    this.title = null;
    this.initialFormData = null;
  }

  private create(toCreate: GrupoDTO) {
    this.grupoService.create(toCreate)
      .then(data => {
        this.messageService.showSuccess('Novo registro incluído com sucesso!');
        this.hideDialog();
        this.afterSave.emit(toCreate);
      })
      .catch(e => {
        console.error(e);
        this.messageService.showApiError(e.error);
      });
  }

  private update(toUpdate: GrupoDTO) {
    this.grupoService.update(toUpdate)
      .then(data => {
        this.messageService.showSuccess('Registro atualizado com sucesso!');
        this.hideDialog();
        this.afterSave.emit(toUpdate);
      })
      .catch(e => {
        console.error(e);
        this.messageService.showApiError(e.error);
      });
  }

  excluiImagem(imagemStr: String) {
    this.messageService.showConfirmation(
      'Confirma a exclusão da Imagem associado ao Grupo?',
      () => {
        this.grupoImagem = new GrupoImagemDTO();
        this.grupoImagem.idGrupo = this.idGrupo;
        this.grupoImagem.imagemString = imagemStr;
        this.grupoImagem.descricao = "imagem excluida";
        this.grupoImagem.usuarioCadastro = "tuto admin"
        this.excluirImagem();
      });

  }

  private excluirImagem() {
    this.grupoService.deleteImagem(this.grupoImagem)
      .then(data => {
        this.messageService.showSuccess('Imagem excluida com sucesso!');
        this.viewImages(data);
        this.afterSave.emit(data);
      })
      .catch(e => {
        console.error(e);
        this.messageService.showApiError(e.error);
      });
  }

  private addImg() {
    this.grupoService.addImagem(this.grupoImagem)
      .then(data => {
        this.messageService.showSuccess('Imagem Adicionada com sucesso!');
        this.viewImages(data);
        this.afterSave.emit(data);
      })
      .catch(e => {
        console.error(e);
        this.messageService.showApiError(e.error);
      });
  }

  viewImages(record?: GrupoDTO) {
    this.images = [];
    if ((record.fotosString !== null) &&
      (record.fotosString !== undefined) &&
      (record.fotosString.length > 0)) {
      for (var i = 0; i < record.fotosString.length; i++) {
        var item = new ImagemView();
        item.alt = "imagem do Grupo";
        item.title = "imagem " + i;
        item.origem = record.fotosString[i].imagemString;
        item.descricao = record.fotosString[i].descricao;

        this.imgRecourse =
          this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + record.fotosString[i].imagemString);
        item.thumbnailImageSrc = this.imgRecourse;
        item.previewImageSrc = this.imgRecourse;

        this.images[i] = item;
      }

    }
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
      toSave.tipoSequencia = 'ALFABETICO';
      this.create(toSave);
    }
  }

  onUpload(event: UploadEvent) {

    for (let file of event.files) {
      this.uploadedFiles.push(file);

      file.arrayBuffer().then(data => {
        var base64String = this.arrayBufferToBase64(data);
        this.foto = base64String;

        this.fotosAProcessar[this.fotosAProcessar.length] = this.foto;

        this.grupoImagem = new GrupoImagemDTO();
        this.grupoImagem.idGrupo = this.idGrupo;
        this.grupoImagem.imagemString = this.foto;
        this.grupoImagem.usuarioCadastro = "tuto admin";
        this.grupoImagem.descricao = this.descricaoImagem;

        var Hoje = new Date();
        Hoje.setDate(Hoje.getDate() - 1);
        this.addImg();

      });

    }

  }

  arrayBufferToBase64(buffer: ArrayBuffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

}
