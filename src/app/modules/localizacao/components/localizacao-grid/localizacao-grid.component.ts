import { LocalizacaoDTO } from '@/shared/model/localizacao.model';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalizacaoService } from '@modules/localizacao/services/localizacao.service';
import { LocalizacaoFormComponent } from '../localizacao-form/localizacao-form.component';

@Component({
  selector: 'localizacao-grid',
  templateUrl: './localizacao-grid.component.html',
  styleUrls: ['./localizacao-grid.component.scss']
})
export class LocalizacaoGridComponent implements OnInit {

  @ViewChild(LocalizacaoFormComponent)
  form: LocalizacaoFormComponent;

  records: LocalizacaoDTO[];
  selectedRecords: LocalizacaoDTO[];
  selectedRecord: LocalizacaoDTO;

  constructor(
    private LocalizacaoService: LocalizacaoService,
    private messageService: AppMessageService
  ) {}

  private deleteRecords(toDelete: LocalizacaoDTO[]): boolean {
    let errors = 0;
    toDelete.forEach(each =>
      this.LocalizacaoService.delete(each.id)
        .then(()=> this.records = this.records.filter(val => val.id !== each.id))
        .catch(error => {
          errors++;
          console.error(error);
        }));
    return errors === 0;
  }

  loadRecordList(): void {
    this.LocalizacaoService.listAll().then(data => this.records = data);
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

  editOnClick(funcao: LocalizacaoDTO): void {
    this.form.showDialog(funcao);
  }

  deleteOnClick(Localizacao: LocalizacaoDTO): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão do registro"' + Localizacao.nome + '"?',
      () => {
        this.deleteById(Localizacao.id);
      });

  }


  private deleteById(toDelete: number) {
    this.LocalizacaoService.delete(toDelete)
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
