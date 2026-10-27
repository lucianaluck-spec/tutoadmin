import { TimeFutebolDTO } from '@/shared/model/timeFutebol.model';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TimeFutebolService } from '@modules/timeFutebol/services/time.service';
import { TimeFutebolFormComponent } from '../time-form/time-form.component';

@Component({
  selector: 'time-grid',
  templateUrl: './time-grid.component.html',
  styleUrls: ['./time-grid.component.scss']
})
export class TimeFutebolGridComponent implements OnInit {

  @ViewChild(TimeFutebolFormComponent)
  form: TimeFutebolFormComponent;

  records: TimeFutebolDTO[];
  selectedRecords: TimeFutebolDTO[];
  selectedRecord: TimeFutebolDTO;

  constructor(
    private timeService: TimeFutebolService,
    private messageService: AppMessageService
  ) {}

  private deleteRecords(toDelete: TimeFutebolDTO[]): boolean {
    let errors = 0;
    toDelete.forEach(each =>
      this.timeService.delete(each.id)
        .then(()=> this.records = this.records.filter(val => val.id !== each.id))
        .catch(error => {
          errors++;
          console.error(error);
        }));
    return errors === 0;
  }

  loadRecordList(): void {
    this.timeService.listAll().then(data => this.records = data);
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

  editOnClick(funcao: TimeFutebolDTO): void {
    this.form.showDialog(funcao);
  }

  deleteOnClick(time: TimeFutebolDTO): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão do registro"' + time.nome + '"?',
      () => {
        this.deleteById(time.id);
      });

  }


  private deleteById(toDelete: number) {
    this.timeService.delete(toDelete)
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
