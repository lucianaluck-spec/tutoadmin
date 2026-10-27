import { PoliticaDTO } from '@/shared/model/politica.model';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PoliticaService } from '@modules/politica/services/politica.service';
import { PoliticaFormComponent } from '../politica-form/politica-form.component';

@Component({
  selector: 'politica-grid',
  templateUrl: './politica-grid.component.html',
  styleUrls: ['./politica-grid.component.scss']
})
export class PoliticaGridComponent implements OnInit {

  @ViewChild(PoliticaFormComponent)
  form: PoliticaFormComponent;

  records: PoliticaDTO[];
  selectedRecords: PoliticaDTO[];
  selectedRecord: PoliticaDTO;

  constructor(
    private politicaService: PoliticaService,
    private messageService: AppMessageService
  ) {}

  private deleteRecords(toDelete: PoliticaDTO[]): boolean {
    let errors = 0;
    toDelete.forEach(each =>
      this.politicaService.delete(each.id)
        .then(()=> this.records = this.records.filter(val => val.id !== each.id))
        .catch(error => {
          errors++;
          console.error(error);
        }));
    return errors === 0;
  }

  loadRecordList(): void {
    this.politicaService.listAll().then(data => this.records = data);
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

  editOnClick(funcao: PoliticaDTO): void {
    this.form.showDialog(funcao);
  }

  deleteOnClick(politica: PoliticaDTO): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão do registro"' + politica.descricao + '"?',
      () => {
        this.deleteById(politica.id);
      });

  }


  private deleteById(toDelete: number) {
    this.politicaService.delete(toDelete)
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
