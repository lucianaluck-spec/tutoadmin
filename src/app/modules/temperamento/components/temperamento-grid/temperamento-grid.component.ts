import { TemperamentoDTO } from '@/shared/model/temperamento.model';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TemperamentoService } from '@modules/temperamento/services/temperamento.service';
import { TemperamentoFormComponent } from '../temperamento-form/temperamento-form.component';

@Component({
  selector: 'temperamento-grid',
  templateUrl: './temperamento-grid.component.html',
  styleUrls: ['./temperamento-grid.component.scss']
})
export class TemperamentoGridComponent implements OnInit {

  @ViewChild(TemperamentoFormComponent)
  form: TemperamentoFormComponent;

  records: TemperamentoDTO[];
  selectedRecords: TemperamentoDTO[];
  selectedRecord: TemperamentoDTO;

  constructor(
    private temperamentoService: TemperamentoService,
    private messageService: AppMessageService
  ) {}

  private deleteRecords(toDelete: TemperamentoDTO[]): boolean {
    let errors = 0;
    toDelete.forEach(each =>
      this.temperamentoService.delete(each.id)
        .then(()=> this.records = this.records.filter(val => val.id !== each.id))
        .catch(error => {
          errors++;
          console.error(error);
        }));
    return errors === 0;
  }

  loadRecordList(): void {
    this.temperamentoService.listAll().then(data => this.records = data);
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

  editOnClick(funcao: TemperamentoDTO): void {
    this.form.showDialog(funcao);
  }

  deleteOnClick(temperamento: TemperamentoDTO): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão do registro"' + temperamento.descricao + '"?',
      () => {
        this.deleteById(temperamento.id);
      });

  }


  private deleteById(toDelete: number) {
    this.temperamentoService.delete(toDelete)
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
