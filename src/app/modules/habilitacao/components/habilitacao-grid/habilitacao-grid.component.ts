import { HabilitacaoDTO } from '@/shared/model/habilitacao.model';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HabilitacaoService } from '@modules/habilitacao/services/habilitacao.service';
import { HabilitacaoFormComponent } from '../habilitacao-form/habilitacao-form.component';

@Component({
  selector: 'habilitacao-grid',
  templateUrl: './habilitacao-grid.component.html',
  styleUrls: ['./habilitacao-grid.component.scss']
})
export class HabilitacaoGridComponent implements OnInit {

  @ViewChild(HabilitacaoFormComponent)
  form: HabilitacaoFormComponent;

  records: HabilitacaoDTO[];
  selectedRecords: HabilitacaoDTO[];
  selectedRecord: HabilitacaoDTO;

  constructor(
    private habilitacaoService: HabilitacaoService,
    private messageService: AppMessageService
  ) {}

  private deleteRecords(toDelete: HabilitacaoDTO[]): boolean {
    let errors = 0;
    toDelete.forEach(each =>
      this.habilitacaoService.delete(each.id)
        .then(()=> this.records = this.records.filter(val => val.id !== each.id))
        .catch(error => {
          errors++;
          console.error(error);
        }));
    return errors === 0;
  }

  loadRecordList(): void {
    this.habilitacaoService.listAll().then(data => this.records = data);
  }

  ngOnInit(): void {
    this.loadRecordList();
  }

  refreshOnClick(): void {
    this.loadRecordList();
    this.messageService.showSuccess('Lista atualizada com sucesso');
  }

  createOnClick(): void {
    this.form.showDialog();
  }

  editOnClick(funcao: HabilitacaoDTO): void {
    this.form.showDialog(funcao);
  }

  deleteOnClick(habilitacao: HabilitacaoDTO): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão do registro"' + habilitacao.descricao + '"?',
      () => {
        this.deleteById(habilitacao.id);
      });

  }


  private deleteById(toDelete: number) {
    this.habilitacaoService.delete(toDelete)
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
