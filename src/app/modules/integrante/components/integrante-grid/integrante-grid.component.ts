import { ConsultarIntegranteRequestDTO, ConsultarIntegranteResponseDTO, IntegranteDTO, IntegranteResponseDTO, StatusDTO } from '@/shared/model/integrante.model ';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IntegranteService } from '@modules/integrante/services/integrante.service';
import { IntegranteFormComponent } from '../integrante-form/integrante-form.component';
import { LazyLoadEvent } from 'primeng/api';
import { PaginacaoRequestDTO } from '@/shared/model/paginacao.model';
import { GrupoDTO } from '@/shared/model/grupo.model';
import { GrupoService } from '@modules/grupo/services/grupo.service';
import { StatusService } from '@modules/status/services/status.service';

@Component({
  selector: 'integrante-grid',
  templateUrl: './integrante-grid.component.html',
  styleUrls: ['./integrante-grid.component.scss']
})
export class IntegranteGridComponent implements OnInit {

  @ViewChild(IntegranteFormComponent)
  form: IntegranteFormComponent;

  itemsPaginated: ConsultarIntegranteResponseDTO;
  records: IntegranteResponseDTO[];
  selectedRecords: IntegranteResponseDTO[];
  selectedRecord: IntegranteResponseDTO;
  paginateFilter: ConsultarIntegranteRequestDTO;
  totalRecords: number;
  pageActual: number;
  rows: number;
  loading: boolean;

  grupos: GrupoDTO[];
  idGrupo: number = null;
  ancestrais: IntegranteResponseDTO[];
  idAncestral: number = null;
  idStatus: number = null;
  todosStatus: StatusDTO[];
  aceito: String = 'TODOS';

  aceitoOptions: any[] = [
    { name: 'TODOS', code: 'TODOS' },
    { name: 'ACEITO', code: 'ACEITO' },
    { name: 'AGUARDANDO', code: 'NÃO ACEITO' },
  ];

  constructor(
    private integranteService: IntegranteService,
    private grupoService: GrupoService,
    private messageService: AppMessageService,
    private statusService: StatusService
  ) {
    this.loadTodosStatus();
  }

  ngOnInit(): void {
    this.paginateFilter = new ConsultarIntegranteRequestDTO();
    this.paginateFilter.paginacao = new PaginacaoRequestDTO();
    this.paginateFilter.paginacao.camposOrdenacao = ["nomeAtual"];
    this.paginateFilter.nomeAtual = null;
    this.paginateFilter.nomeConjuge = null;
    this.paginateFilter.idGrupo = null;
    this.paginateFilter.idAncestral = null;
    this.paginateFilter.idStatus = null;
    this.paginateFilter.aceito = null;
    this.rows = 10;
    this.pageActual = 1;
    this.loadGrupos();
    this.loadAncestrais();
    this.loadRecordList();
    this.loadTodosStatus();
  }

  private deleteRecords(toDelete: IntegranteDTO[]): boolean {
    let errors = 0;
    toDelete.forEach(each =>
      this.integranteService.delete(each.id)
        .then(() => this.records = this.records.filter(val => val.id !== each.id))
        .catch(error => {
          errors++;
          console.error(error);
        }));
    return errors === 0;
  }

  loadRecordList(): void {
    this.loading = true;
    this.paginateFilter.paginacao.itensPorPagina = this.rows;
    this.paginateFilter.paginacao.paginaAtual = this.pageActual;
    this.paginateFilter.idGrupo = this.idGrupo;
    this.paginateFilter.idAncestral = this.idAncestral;
    this.paginateFilter.idStatus = this.idStatus;
    if (this.aceito !== 'TODOS') {
      this.paginateFilter.aceito = this.aceito == 'ACEITO';
    } else {
      this.paginateFilter.aceito = null;
    }


    this.integranteService.listAll(this.paginateFilter)
      .then(item => {
        this.itemsPaginated = item;
        this.records = this.itemsPaginated.itens;
        this.totalRecords = this.itemsPaginated.paginacao.totalItens;
        this.loading = false;
      });
  }

  onChange(event) {
    this.loadAncestrais();
    this.loadRecordList();
  }

  onChangeAncestral(event) {
    this.loadRecordList();
  }


  onLazyLoad(event: LazyLoadEvent): void {
    this.rows = event.rows;
    this.pageActual = (event.first / event.rows) + 1;

    //Ordenação
    this.paginateFilter.paginacao.camposOrdenacao = [];
    if (event.sortField === undefined) {
      if (event.multiSortMeta !== undefined) {
        for (let i = 0; i < event.multiSortMeta.length; i++) {
          this.paginateFilter.paginacao.camposOrdenacao[i] =
            event.multiSortMeta[i].order == 1
              ? event.multiSortMeta[i].field
              : event.multiSortMeta[i].field + " DESC";
        }
      } else this.paginateFilter.paginacao.camposOrdenacao[0] = event.sortField;
    }

    //Inicializa Filtro
    this.paginateFilter.nomeAtual = null;
    this.paginateFilter.nomeConjuge = null;

    if (event.filters !== undefined) {
      for (let prop in event.filters) {
        let filterField: string = prop;
        let filterMeta = event.filters[filterField];
        if (filterMeta.value !== null) {
          if (filterField === 'nomeAtual') {
            this.paginateFilter.nomeAtual = filterMeta.value;
          }
          if (filterField === 'nomeConjuge') {
            this.paginateFilter.nomeConjuge = filterMeta.value;
          }

        }

      }
    }
    this.loadRecordList();
  }


  private loadGrupos() {
    this.grupoService.listAll().then(data => this.grupos = data);
  }

  private loadTodosStatus() {
    this.statusService.listAll().then(data => this.todosStatus = data);
  }

  private loadAncestrais() {

    if (this.idGrupo !== null) {
      this.integranteService.listAncestraisByGrupo(this.idGrupo).then(data => this.ancestrais = data);
    } else {
      this.integranteService.listAncestrais().then(data => this.ancestrais = data);
    }

  }

  refreshOnClick(): void {
    this.loadRecordList();
    this.messageService.showSuccess('Lista atualizada com sucesso');
  }

  createOnClick(): void {
    this.form.showDialog();
  }

  editOnClick(integrante: IntegranteDTO): void {
    this.form.showDialog(integrante);
  }

  deleteOnClick(integrante: IntegranteDTO): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão do registro"' + integrante.nomeAtual + '"?',
      () => {
        this.deleteById(integrante.id);
      });
  }


  private deleteById(toDelete: number) {
    this.integranteService.delete(toDelete)
      .then(() => {
        this.records = this.records.filter(val => val.id !== toDelete);
        this.messageService.showSuccess('Registro excluído');
      })
      .catch(error => {
        console.error(error);
        this.messageService.showError('Erro ao excluir o registro ' + toDelete);
      });
  }


  deleteBulkOnClick(): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão dos registros selecionados?',
      () => {
        if (this.deleteRecords(this.selectedRecords)) {
          this.messageService.showSuccess('Registros excluídos com sucesso!');
        } else {
          this.messageService.showError('Erro ao excluir o registro');
        }
      }
    );
  }

}
