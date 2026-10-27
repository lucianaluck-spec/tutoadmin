import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsultarImagemIntegranteRequestDTO, IntegranteAvatarRequestDTO, IntegranteDTO, IntegranteImagemDTO, IntegranteResponseDTO, StatusDTO } from '@/shared/model/integrante.model ';
import { IntegranteService } from '@modules/integrante/services/integrante.service';
import { GrupoDTO, ImagemView } from '@/shared/model/grupo.model';
import { GrupoService } from '@modules/grupo/services/grupo.service';
import { ProfissaoDTO } from '@/shared/model/profissao.model';
import { ProfissaoService } from '@modules/profissao/services/profissao.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';
import { ReligiaoDTO } from '@/shared/model/religiao.model';
import { SignoByDiaMesDTO, SignoDTO } from '@/shared/model/signo.model';
import { EstadoPaisRequestDTO, LocalizacaoDTO } from '@/shared/model/localizacao.model';
import { PoliticaDTO } from '@/shared/model/politica.model';
import { TimeFutebolDTO } from '@/shared/model/timeFutebol.model';
import { EstiloMusicalDTO } from '@/shared/model/estiloMusical.model';
import { SignoService } from '@modules/signo/services/signo.service';
import { LocalizacaoService } from '@modules/localizacao/services/localizacao.service';
import { ReligiaoService } from '@modules/religiao/services/religiao.service';
import { PoliticaService } from '@modules/politica/services/politica.service';
import { TimeFutebolService } from '@modules/timeFutebol/services/time.service';
import { EstiloMusicalService } from '@modules/estiloMusical/services/estiloMusical.service';
import { HabilitacaoService } from '@modules/habilitacao/services/habilitacao.service';
import { TemperamentoService } from '@modules/temperamento/services/temperamento.service';
import { HabitoAlimentarService } from '@modules/habitoAlimentar/services/habitoAlimentar.service';
import { HabitoAlimentarDTO } from '@/shared/model/habitoAlimentar.model';
import { HabilitacaoDTO } from '@/shared/model/habilitacao.model';
import { TemperamentoDTO } from '@/shared/model/temperamento.model';
import { IntroducaoService } from '@modules/introducao/services/introducao.service';
import { IntroducaoDTO } from '@/shared/model/introducao.model';
import { Table } from 'primeng/table';
import { StatusService } from '@modules/status/services/status.service';
import { TipoSanguineoDTO } from '@/shared/model/tipoSanguineo.model';
import { TipoSanguineoService } from '@modules/tipoSanguineo/services/tipo-sanguineo.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'integrante-form',
  templateUrl: './integrante-form.component.html',
  styleUrls: ['./integrante-form.component.scss']
})

export class IntegranteFormComponent implements OnInit {

  @Input('visible')
  formVisible: boolean;

  @Input('formData')
  initialFormData: IntegranteDTO;

  @Output()
  afterSave = new EventEmitter<IntegranteDTO>();
  
  focusByID(event: any, id: string) {
    event.preventDefault(); // Impede o submit do formulário
    const element = document.getElementById(id);

    if (element) {
     (element as HTMLSelectElement).focus();
    }
  }

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

  submitted = false;
  editing: boolean;
  cancelado: boolean;
  empesquisa: boolean
  title: string;
  detailError: string = '';
  titleIntroducao: string;
  introducaoVisible: boolean = false;
  filtroProfissaoVisible: boolean = false;
  viewInformacaoDescricao: boolean = false;
  viewInformacaoNome: boolean = false;
  newLocalizacao: boolean = false;
  nroLocalizacao: number;

  grupos: GrupoDTO[];
  grupo: GrupoDTO;
  ancestrais: IntegranteResponseDTO[];
  profissoes: ProfissaoDTO[];
  religioes: ReligiaoDTO[];
  signos: SignoDTO[];
  localizacoes: LocalizacaoDTO[];
  localizacoesOrigem: LocalizacaoDTO[];
  politicas: PoliticaDTO[];
  timesFutebol: TimeFutebolDTO[];
  estilosMusicais: EstiloMusicalDTO[];
  habitosAlimentar: HabitoAlimentarDTO[];
  tiposSanguineo: TipoSanguineoDTO[];
  habilitacoes: HabilitacaoDTO[];
  temperamentos: TemperamentoDTO[];
  todosStatus: StatusDTO[];

  estados: string[];
  estadosOrigem: string[];
  introducao: IntroducaoDTO = new IntroducaoDTO();
  searchProfissao: string;
  searchValue: string;
  idGrupo: number;

  imgRecourse: SafeResourceUrl;
  imgRecourseConjuge: SafeResourceUrl;
  imgRecourseImage: SafeResourceUrl;
  pdfRecourseImage: SafeResourceUrl;
  foto: String;
  fotoConjuge: String;
  images: ImagemView[] = [];
  doctos: ImagemView[] = [];
  integranteImagem: IntegranteImagemDTO;
  descricaoImagem: String;
  descricaoDocto: String;
  informacoes: any;

  
  sexoOptions: any[] = [
    { name: 'Masculino', code: 'MASCULINO' },
    { name: 'Feminino', code: 'FEMININO' },
    // ... more options
  ];
  items: MenuItem[] | undefined;
  estado: string;
  pais: string;
  local: string;
 
   
  form: FormGroup = new FormGroup({
    'pais': new FormControl('Brasil'),
    'paisOrigem': new FormControl('Brasil'),
    'estado': new FormControl(''),
    'estadoOrigem': new FormControl(''),
    'id': new FormControl({ value: null, disabled: true }),
    'nroCadastro': new FormControl({ value: null, disabled: true }),
    'sequencia': new FormControl({ value: null, disabled: true }),
    'nomeAtual': new FormControl('', [Validators.required]),
    'nomeSolteiro': new FormControl(''),
    'nomeConjugeAtual': new FormControl(''),
    'nomeConjugeAnterior': new FormControl(''),
    'dataNascimento': new FormControl(null),
    'dataFalecimento': new FormControl(null),
    'idGrupo': new FormControl(''),
    'idAncestral': new FormControl(''),
    'sexo': new FormControl(null),
    'telefone': new FormControl(''),
    'email': new FormControl(''),
    'idProfissao': new FormControl(''),
    'idReligiao': new FormControl(''),
    'idSigno': new FormControl(''),
    'idPolitica': new FormControl(''),
    'idTimeFutebol': new FormControl(''),
    'idLocalizacaoOrigem': new FormControl(''),
    'idLocalizacaoAtual': new FormControl(''),
    'idHabilitacao': new FormControl(''),
    'idTemperamento': new FormControl(''),
    'idHabitoAlimentar': new FormControl(''),
    'idTipoSanguineo': new FormControl(''),
    'idEstiloMusical': new FormControl(''),
    'dataCadastro': new FormControl(null),
    'idStatus': new FormControl(null),
     'motivoCancelamento': new FormControl(null),
     'nome1Ancestral': new FormControl(''),
     'nome2Ancestral': new FormControl(''),
     'aceito': new FormControl(true, [Validators.required]),


  });

  constructor(

    private messageService: AppMessageService,
    private integranteService: IntegranteService,
    private grupoService: GrupoService,
    private profissaoService: ProfissaoService,
    private signoService: SignoService,
    private localizacaoService: LocalizacaoService,
    private religiaoService: ReligiaoService,
    private politicaService: PoliticaService,
    private timeService: TimeFutebolService,
    private estiloMusicalService: EstiloMusicalService,
    private habilitacaoService: HabilitacaoService,
    private temperamentoService: TemperamentoService,
    private habitoAlimentarService: HabitoAlimentarService,
    private introducaoService: IntroducaoService,
    private tipoSanguineoService: TipoSanguineoService,
    private statusService: StatusService,
    private sanitizer: DomSanitizer) {

    this.loadGrupos();

    this.loadProfissoes();
    this.loadSignos();
    this.loadReligioes();
    this.loadPoliticas();
    this.loadTimes();
    this.loadEstilosMusicais();
    this.loadHabilitacao();
    this.loadHabitoAlimentar();
    this.loadTiposSanguineo();
    this.loadTemperamentos();
    this.loadTodosStatus();

  }


  private loadGrupos() {
    this.grupoService.listAll().then(data => this.grupos = data);
  }

  private loadProfissoes() {
    this.profissaoService.listAll().then(data => this.profissoes = data);
  }

  private loadSignos() {
    this.signoService.listAll().then(data => this.signos = data);
  }

  private loadTiposSanguineo() {
    this.tipoSanguineoService.listAll().then(data => this.tiposSanguineo = data);
  }

  private loadReligioes() {
    this.religiaoService.listAll().then(data => this.religioes = data);
  }


  private loadPoliticas() {
    this.politicaService.listAll().then(data => this.politicas = data);
  }


  private loadEstilosMusicais() {
    this.estiloMusicalService.listAll().then(data => this.estilosMusicais = data);
  }

  private loadHabilitacao() {
    this.habilitacaoService.listAll().then(data => this.habilitacoes = data);
  }

  private loadHabitoAlimentar() {
    this.habitoAlimentarService.listAll().then(data => this.habitosAlimentar = data);
  }

  private loadTemperamentos() {
    this.temperamentoService.listAll().then(data => this.temperamentos = data);
  }


  private loadTodosStatus() {
    this.statusService.listAll().then(data => this.todosStatus = data);
  }

  private loadTimes() {
    this.timeService.listAll().then(data => this.timesFutebol = data);
  }

  private loadFormData(): void {
    this.form.patchValue(this.initialFormData);
  }

  private extractFormData(): IntegranteDTO {
    return { ...this.initialFormData, ...this.form.value };
  }

  private resetForm() {
    this.form.reset();
    this.submitted = false;
    this.editing = false;
    this.cancelado = false;
    this.empesquisa = false;
    this.title = null;
    this.initialFormData = null;
  }

  private create(toCreate: IntegranteDTO) {
    this.integranteService.create(toCreate)
      .then(data => {
        this.messageService.showSuccess('Novo registro incluído com sucesso!');
        //this.hideDialog();
        this.atualizaFoto(data);
        this.showDialog(data);
        this.afterSave.emit(data);
      })
      .catch(e => {
        console.error(e);
        this.messageService.showApiError(e.error);
      });
  }

  private update(toUpdate: IntegranteDTO) {
    this.integranteService.update(toUpdate)
      .then(data => {
        this.messageService.showSuccess('Registro atualizado com sucesso!');
        //this.hideDialog();
        this.atualizaFoto(data);
        this.afterSave.emit(toUpdate);
      })
      .catch(e => {
        console.error(e);
        this.messageService.showApiError(e.error);
      });
  }

  ngOnInit(): void {

    this.items = [
      { label: 'Exclui', icon: 'pi pi-times' }
    ];
  }

  showDialog(record?: IntegranteResponseDTO): void {
    this.editing = record !== null && record !== undefined;
    this.initialFormData = record || new IntegranteDTO();
    record = record === undefined ? new IntegranteResponseDTO() : record;

    this.initialFormData.idGrupo = (this.editing &&
      (record.grupo !== undefined) &&
      (record.grupo !== null)) ? record.grupo.id : null;
    this.idGrupo = (record.grupo !== undefined) &&
      (record.grupo !== null) ? record.grupo.id : null;
    this.initialFormData.idAncestral = (this.editing &&
      record.ancestral !== null) ? record.ancestral.id : null;
    this.initialFormData.idProfissao = (this.editing &&
      record.profissao !== null) ? record.profissao.id : null;

    this.initialFormData.idSigno = (this.editing &&
      record.signo !== null) ? record.signo.id : null;

    this.initialFormData.idLocalizacaoOrigem = (this.editing &&
      record.localizacaoOrigem !== null) ? record.localizacaoOrigem.id : null;

    this.initialFormData.idLocalizacaoAtual = (this.editing &&
      record.localizacaoAtual !== null) ? record.localizacaoAtual.id : null;

    this.initialFormData.idReligiao = (this.editing &&
      record.religiao !== null) ? record.religiao.id : null;

    this.initialFormData.idPolitica = (this.editing &&
      record.politica !== null) ? record.politica.id : null;

    this.initialFormData.idTimeFutebol = (this.editing &&
      record.timeFutebol !== null) ? record.timeFutebol.id : null;

    this.initialFormData.idHabilitacao = (this.editing &&
      record.habilitacao !== null) ? record.habilitacao.id : null;

    this.initialFormData.idHabilitacao = (this.editing &&
      record.habilitacao !== null) ? record.habilitacao.id : null;


    this.initialFormData.idHabitoAlimentar = (this.editing &&
      record.habitoAlimentar !== null) ? record.habitoAlimentar.id : null;

    this.initialFormData.idEstiloMusical = (this.editing &&
      record.estiloMusical !== null) ? record.estiloMusical.id : null;

    this.initialFormData.idTemperamento = (this.editing &&
      record.temperamento !== null) ? record.temperamento.id : null;

this.initialFormData.idTipoSanguineo = (this.editing &&
      record.tipoSanguineo !== null) ? record.tipoSanguineo.id : null;

   this.initialFormData.idStatus = (this.editing &&
      record.status !== null) ? record.status.id : null;

    this.title = "Ficha Cadastral";

    this.form.reset();

    this.loadFormData();
    this.formVisible = true;
    this.buscaAncestrais();
    this.atualizaFoto(record);

    this.descricaoImagem = "";
    this.viewImages();
    this.viewDoctos();

    if (this.editing) {
      if (record.localizacaoAtual !== null) {
        this.form.get("pais").setValue(record.localizacaoAtual.pais);
        this.form.get("estado").setValue(record.localizacaoAtual.estado);
        this.form.get("idLocalizacaoAtual").setValue(record.localizacaoAtual.id);
      } else {
        this.form.get("pais").setValue("Brasil");
        this.form.get("estado").setValue("");
      }
      if (record.localizacaoOrigem !== null) {
        this.form.get("paisOrigem").setValue(record.localizacaoOrigem.pais);
        this.form.get("estadoOrigem").setValue(record.localizacaoOrigem.estado);
        this.form.get("idLocalizacaoOrigem").setValue(record.localizacaoOrigem.id);
      } else {
        this.form.get("paisOrigem").setValue("Brasil");
        this.form.get("estadoOrigem").setValue("");
      }
    } else {
      this.form.get("pais").setValue("Brasil");
      this.form.get("estado").setValue("");
      this.form.get("paisOrigem").setValue("Brasil");
      this.form.get("estadoOrigem").setValue("");
       this.empesquisa = false;
    }
    this.loadEstados(2);
    this.loadEstados(1);
    this.introducao = new IntroducaoDTO();
    this.cancelado = (this.editing &&
           record.status.nome == 'CANCELADO');
    this.empesquisa = (this.form.get("idGrupo").value === null ||
    this.form.get("idAncestral").value === null);
    this.loadLocalizacoes(1);
    this.loadLocalizacoes(2);

    console.log("Aceito ", this.initialFormData.aceito);
    console.log("Aceito form ", this.form.get("aceito").value);

  }

  excluiImagem(idImagem: number) {
    this.messageService.showConfirmation(
      'Confirma a exclusão da Imagem/Docto associado ao Integrante?',
      () => {
        this.integranteImagem = new IntegranteImagemDTO();
        this.integranteImagem.id = idImagem;
        this.integranteImagem.descricao = "imagem excluida";
        this.integranteImagem.usuarioCadastro = "tuto admin"
        this.excluirImagem();
      });

  }

  private excluirImagem() {
    this.integranteService.deleteImagem(this.integranteImagem.id)
      .then(data => {
        this.messageService.showSuccess('Imagem/Documento excluido com sucesso!');
        this.viewImages();
        this.viewDoctos();

      })
      .catch(e => {
        console.error(e);
        this.messageService.showApiError(e.error);
      });
  }

  private addImg() {
    if (this.integranteImagem.descricao === '') {
      this.messageService.showError("Descrição precisa ser preenchida");
    } else {
      this.integranteService.addImagem(this.integranteImagem)
        .then(data => {
          this.messageService.showSuccess('Imagem Adicionada com sucesso!');
          this.viewImages();

        })
        .catch(e => {
          console.error(e);
          this.messageService.showApiError(e.error);
        });
    }
  }

  viewImages() {
    var idIntegrante = this.initialFormData.id;
    this.images = [];
    if ((idIntegrante !== undefined) && (idIntegrante !== null)) {
      
      const filtro = new ConsultarImagemIntegranteRequestDTO();
      filtro.idIntegrante = idIntegrante;
      filtro.tipo = "png";
      this.integranteService.listImagensByIntegrante(filtro).then(data => {
        for (var i = 0; i < data.length; i++) {
          var item = new ImagemView();
          item.alt = "imagem do Integrante";
          item.title = "imagem " + i;
          item.origem = data[i].imagemString;
          item.descricao = data[i].descricao;
          item.id = data[i].id;

          this.imgRecourseImage = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' +
              data[i].imagemString);

          item.thumbnailImageSrc = this.imgRecourseImage;
          item.previewImageSrc = this.imgRecourseImage;
          this.images[i] = item;
        }
        
      })

    }


  }

  viewDoctos() {
    var idIntegrante = this.initialFormData.id;
    this.doctos= [];
    if ((idIntegrante !== undefined) && (idIntegrante !== null)) {
      const filtro = new ConsultarImagemIntegranteRequestDTO();
      filtro.idIntegrante = idIntegrante;
      filtro.tipo = "pdf";
      this.integranteService.listImagensByIntegrante(filtro).then(data => {
        for (var i = 0; i < data.length; i++) {
          var item = new ImagemView();
          item.alt = "Documento do Integrante";
          item.title = "imagem " + i;
          item.origem = data[i].imagemString;
          item.descricao = data[i].descricao;
          item.id = data[i].id;

          this.pdfRecourseImage = this.sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64,' +
              data[i].imagemString);

          item.thumbnailImageSrc = this.pdfRecourseImage;
          item.previewImageSrc = this.pdfRecourseImage;
          this.doctos[i] = item;
        }
      })

    }

  }

  buscaAncestrais(): void {
    this.idGrupo = this.form.get('idGrupo').value;
    if (this.idGrupo !== null) {
      this.grupoService.getByID(this.idGrupo).then(data => {
        this.grupo = data;
        this.integranteService.listAncestraisByGeracao(this.grupo.geracao - 1).then(data => this.ancestrais = data);
      });
    } else {
      this.integranteService.listAncestrais();
    }
    this.verPreenchimentoNomesAncestrais();
  }

  verPreenchimentoNomesAncestrais() {
    this.empesquisa = (this.form.get('idGrupo').value === null) ||
                      (this.form.get('idAncestral').value === null);
  }

  onChangeAncestral() {
    this.verPreenchimentoNomesAncestrais();
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

    //Cancelado
     if ( (this.form.get('idStatus').value === '4') &&
         (this.form.get('motivoCancelamento').value === '')){
      this.messageService.showWarn('Motivo de Cancelamento precisa ser preenchido', 'Falha na validação');
      return;
    }

    toSave.fotoString = this.foto;
    toSave.fotoStringConjuge = this.fotoConjuge;

    if (this.editing) {
      this.update(toSave);
    } else {
      this.create(toSave);
    }
  }

  onUpload(event: UploadEvent) {

    for (let file of event.files) {
      file.arrayBuffer().then(data => {
        var base64String = this.arrayBufferToBase64(data);
        this.foto = base64String;
        this.atualizaAvatars();
      });

    }
  }

  onUploadConjuge(event: UploadEvent) {

    for (let file of event.files) {

      file.arrayBuffer().then(data => {
        var base64String = this.arrayBufferToBase64(data);
        this.fotoConjuge = base64String;
        this.atualizaAvatars();
      });

    }
  }


  onUploadImage(event: UploadEvent) {

    for (let file of event.files) {
      file.arrayBuffer().then(data => {
        var base64String = this.arrayBufferToBase64(data);

        this.integranteImagem = new IntegranteImagemDTO();
        this.integranteImagem.idIntegrante = this.initialFormData.id;
        this.integranteImagem.imagemString = base64String;
        this.integranteImagem.tipoDocumento = "png";
        this.integranteImagem.usuarioCadastro = "tuto admin";
        this.integranteImagem.descricao = this.descricaoImagem;

        var Hoje = new Date();
        Hoje.setDate(Hoje.getDate() - 1);
        this.addImg();

      });

    }

  }


  onUploadDocto(event: UploadEvent) {

    for (let file of event.files) {
      file.arrayBuffer().then(data => {
        var base64String = this.arrayBufferToBase64(data);

        this.integranteImagem = new IntegranteImagemDTO();
        this.integranteImagem.idIntegrante = this.initialFormData.id;
        this.integranteImagem.imagemString = base64String;
        this.integranteImagem.tipoDocumento = "pdf";
        this.integranteImagem.usuarioCadastro = "tuto admin";
        this.integranteImagem.descricao = this.descricaoDocto;

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

  atualizaAvatars() {

    var integranteAvatar = new IntegranteAvatarRequestDTO();
    integranteAvatar.fotoString = this.foto;
    integranteAvatar.fotoStringConjuge = this.fotoConjuge;
    integranteAvatar.id = this.initialFormData.id;
    this.integranteService.atualizaAvatars(integranteAvatar)
      .then(data => {
        this.messageService.showSuccess('Avatar atualizado com sucesso!');
        this.afterSave.emit(data);
        this.atualizaFoto(data);
      })
      .catch(e => {
        console.error(e);
        this.messageService.showApiError(e.error);
      });
  }

  excluiFoto(): void {
    this.foto = "";
    this.atualizaAvatars();
  }

  excluiFotoConjuge(): void {
    this.fotoConjuge = "";
    this.atualizaAvatars();
  }

  atualizaFoto(record?: IntegranteResponseDTO): void {
    if ((record.fotoString !== undefined) && (record.fotoString !== '') && (record.fotoString !== null)) {
      this.foto = record.fotoString;
      this.imgRecourse = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + record.fotoString);
    } else {
      this.foto = "";
      this.imgRecourse = "/assets/img/default-profile.png"
    }
    if ((record.fotoStringConjuge !== undefined) && (record.fotoStringConjuge !== '') && (record.fotoStringConjuge !== null)) {
      this.fotoConjuge = record.fotoStringConjuge;
      this.imgRecourseConjuge = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + record.fotoStringConjuge);
    } else {
      this.fotoConjuge = "";
      this.imgRecourseConjuge = "/assets/img/default-profile.png"
    }

  }


  buscaSigno() {
    if (this.form.get("dataNascimento").value !== null) {
      let mes: string = this.form.get("dataNascimento").value.substring(5, 7);
      let dia: string = this.form.get("dataNascimento").value.substring(8, 10);

      var dto = new SignoByDiaMesDTO();
      dto.mesNascimento = mes;
      dto.diaNascimento = dia;

      this.signoService.buscaSigno(dto)
        .then(data => {
          console.log(data);

          this.form.get("idSigno").setValue(data.id);
        })
        .catch(e => {
          console.error(e);
          this.messageService.showApiError(e.error);
        });
    } else {
      this.form.get("idSigno").setValue(null);
    }
  }

  salvarNovaProfissao(): void {

    if (this.searchProfissao.length > 0) {
    const toSave = new ProfissaoDTO();
    toSave.descricao = this.searchProfissao;

    this.profissaoService.create(toSave)
      .then(data => {
        this.messageService.showSuccess('Nova Profissao incluída com sucesso!');
        this.loadProfissoes();
      })
      .catch(e => {
        console.error(e);
        this.messageService.showApiError(e.error);
      });
    }
  }


  loadLocalizacoes(tipo: number) {
    var itemBusca = new EstadoPaisRequestDTO();
    if (tipo === 1) {
      itemBusca.estado = this.form.get("estado").value;
      itemBusca.pais = this.form.get("pais").value;

    } else {
      itemBusca.estado = this.form.get("estadoOrigem").value;
      itemBusca.pais = this.form.get("paisOrigem").value;

    }

    this.localizacaoService.listAllByPaisEstado(itemBusca).then(data => {
      if (tipo === 1) {
        this.localizacoes = data;
      } else {
        this.localizacoesOrigem = data;
      }
    })
  }

  loadEstados(tipo: number) {
    var pais = tipo === 1 ? this.form.get("pais").value : this.form.get("paisOrigem").value;
    this.localizacaoService.listEstadosByPais(pais).then(data => {
      if (tipo === 1) {
        this.estados = data
      } else {
        this.estadosOrigem = data
      }
    });
  }

  viewIntroducaoOnClick(tema: string) {
    this.titleIntroducao = tema;
    this.introducaoVisible = true;
    this.introducaoService.getByTema(tema).then(data => {
      this.introducao = data;
      if (data === null) {
        this.introducao = new IntroducaoDTO();
        this.introducao.explicacao = "Explicação Geral não cadastrada";
      }

    });
  }

  clear(table: Table) {
    table.clear();
    this.searchProfissao = ''
  }

  clearSearch(table: Table) {
    table.clear();
    this.searchValue = ''
  }


  filterProfissaoOnClick() {
    this.filtroProfissaoVisible = true;
    this.introducaoService.getByTema("PROFISSAO").then(data => {
      this.introducao = data;
    });
  }

  refreshProfissaoOnClick(): void {
    this.loadProfissoes();
  }

  captureProfissao(prof: ProfissaoDTO) {
    this.form.get("idProfissao").setValue(prof.id);
    this.filtroProfissaoVisible = false;

  }


  viewInformacaoOnClick(tema: string) {
    this.titleIntroducao = tema;
    this.introducaoService.getByTema(tema).then(data => {
      this.introducao = data;
      if (data === null) {
        this.introducao = new IntroducaoDTO();
        this.introducao.explicacao = "Explicação Geral não cadastrada";
      }

      switch (tema) {
        case "RELIGIAO": {
          this.informacoes = this.religioes;
          this.viewInformacaoNome = true;
          break;
        }
        case "POLITICA": {
          this.informacoes = this.politicas;
          this.viewInformacaoDescricao = true;
          break;
        }
        case "TIME": {
          this.informacoes = this.timesFutebol;
          this.viewInformacaoNome = true;
          break;
        }
        case "TEMPERAMENTO": {
          this.informacoes = this.temperamentos;
          this.viewInformacaoDescricao = true;
          break;
        }
        case "ESTILO_MUSICAL": {
          this.informacoes = this.estilosMusicais;
          this.viewInformacaoNome = true;
          break;
        }
        case "TIPO_SANGUINEO": {
          this.informacoes = this.tiposSanguineo;
          this.viewInformacaoNome = true;
          break;
        }
        default: { this.informacoes = null; break; }
      }
    });

  }

  captureItem(item: any) {

    this.viewInformacaoNome = false;
    this.viewInformacaoDescricao = false;
    switch (this.titleIntroducao) {
      case "RELIGIAO": {
        this.form.get("idReligiao").setValue(item.id);
        break;
      }
      case "POLITICA": {
        this.form.get("idPolitica").setValue(item.id);
        break;
      }
      case "TIME": {
        this.form.get("idTimeFutebol").setValue(item.id);
        break;
      }
      case "HABITO_ALIMENTAR": {
        this.form.get("idHabitoAlimentar").setValue(item.id);
        break;
      }
      case "TEMPERAMENTO": {
        this.form.get("idTemperamento").setValue(item.id);
        break;
      }
      case "TIPO_SANGUINEO": {
        this.form.get("idTipoSanguineo").setValue(item.id);
        break;
      }

      default: { this.informacoes = null; break; }
    }

  }

  incluiLocalizacaoOnClick(nro: number) {
    this.newLocalizacao = true;
    this.nroLocalizacao = nro;
    switch (nro) {
      case 1: {
        this.pais = this.form.get('pais').value;
        break;
      }
      case 2: {
        this.pais = this.form.get('paisOrigem').value;
        break;
      }
    }

  }

  salvarLocalizacaoOnClick(): void {

    this.messageService.showConfirmation(
      'Confirma inclusão de nova localização?',
      () => {
        let localizacao = new LocalizacaoDTO();
        localizacao.estado = this.estado.toUpperCase();
        localizacao.pais = this.pais.toUpperCase();
        localizacao.nome = this.local.toUpperCase();

        this.localizacaoService.create(localizacao)
          .then(data => {
            this.messageService.showSuccess('Novo Localizacao incluído com sucesso!');
            //this.hideDialog();
            if (this.nroLocalizacao === 1) {
              this.form.get("idLocalizacaoAtual").setValue(data.id);
              this.form.get("pais").setValue(this.pais.toUpperCase());
              this.form.get("estado").setValue(this.estado.toUpperCase());
              this.loadEstados(1);
              this.loadLocalizacoes(1);
            } else {
              this.form.get("idLocalizacaoOrigem").setValue(data.id);
              this.form.get("paisOrigem").setValue(this.pais.toUpperCase());
              this.form.get("estadoOrigem").setValue(this.estado.toUpperCase());
              this.loadEstados(2);
              this.loadLocalizacoes(2);
            }

            this.newLocalizacao = false;
          })
          .catch(e => {
            console.error(e);
            this.messageService.showApiError(e.error);
          });
      });
  }

  focusNext(event: any) {
    event.preventDefault(); // Impede o "Enter" de submeter o form
    event.stopPropagation();
    if (event.target.parentElement.nextElementSibling) {
      console.log("pai :", event.target.parentElement.nextElementSibling);
      const nextInput = event.target.parentElement.nextElementSibling.querySelector('input', 'select', 'textarea');
      if (nextInput) {
        nextInput.focus();

      }
    } else {
      if (event.target.nextElementSibling) {
        const nextInput = event.target.nextElementSibling.querySelector('input', 'select', 'textarea');
        if (nextInput) {
         nextInput.focus();

        }
      }
    }
  }

  onChangeStatus(event) {
    this.cancelado = this.form.get('idStatus').value === '4';
  }


}


