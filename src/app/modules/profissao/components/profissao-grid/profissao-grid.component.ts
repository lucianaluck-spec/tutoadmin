import { ProfissaoDTO } from '@/shared/model/profissao.model';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfissaoService } from '@modules/profissao/services/profissao.service';
import { ProfissaoFormComponent } from '../profissao-form/profissao-form.component';

@Component({
  selector: 'profissao-grid',
  templateUrl: './profissao-grid.component.html',
  styleUrls: ['./profissao-grid.component.scss']
})
export class ProfissaoGridComponent implements OnInit {

  @ViewChild(ProfissaoFormComponent)
  form: ProfissaoFormComponent;

  records: ProfissaoDTO[];
  selectedRecords: ProfissaoDTO[];
  selectedRecord: ProfissaoDTO;

  constructor(
    private profissaoService: ProfissaoService,
    private messageService: AppMessageService
  ) {}

  private deleteRecords(toDelete: ProfissaoDTO[]): boolean {
    let errors = 0;
    toDelete.forEach(each =>
      this.profissaoService.delete(each.id)
        .then(()=> this.records = this.records.filter(val => val.id !== each.id))
        .catch(error => {
          errors++;
          console.error(error);
        }));
    return errors === 0;
  }

  loadRecordList(): void {
    this.profissaoService.listAll().then(data => this.records = data);
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

  editOnClick(funcao: ProfissaoDTO): void {
    this.form.showDialog(funcao);
  }

  deleteOnClick(profissao: ProfissaoDTO): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão do registro"' + profissao.descricao + '"?',
      () => {
        this.deleteById(profissao.id);
      });

  }


  private deleteById(toDelete: number) {
    this.profissaoService.delete(toDelete)
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
