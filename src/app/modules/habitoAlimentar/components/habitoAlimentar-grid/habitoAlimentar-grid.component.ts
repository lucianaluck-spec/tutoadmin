import { HabitoAlimentarDTO } from '@/shared/model/habitoAlimentar.model';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HabitoAlimentarService } from '@modules/habitoAlimentar/services/habitoAlimentar.service';
import { HabitoAlimentarFormComponent } from '../habitoAlimentar-form/habitoAlimentar-form.component';

@Component({
  selector: 'habitoAlimentar-grid',
  templateUrl: './habitoAlimentar-grid.component.html',
  styleUrls: ['./habitoAlimentar-grid.component.scss']
})
export class HabitoAlimentarGridComponent implements OnInit {

  @ViewChild(HabitoAlimentarFormComponent)
  form: HabitoAlimentarFormComponent;

  records: HabitoAlimentarDTO[];
  selectedRecords: HabitoAlimentarDTO[];
  selectedRecord: HabitoAlimentarDTO;

  constructor(
    private habitoalimentarService: HabitoAlimentarService,
    private messageService: AppMessageService
  ) {}

  private deleteRecords(toDelete: HabitoAlimentarDTO[]): boolean {
    let errors = 0;
    toDelete.forEach(each =>
      this.habitoalimentarService.delete(each.id)
        .then(()=> this.records = this.records.filter(val => val.id !== each.id))
        .catch(error => {
          errors++;
          console.error(error);
        }));
    return errors === 0;
  }

  loadRecordList(): void {
    this.habitoalimentarService.listAll().then(data => this.records = data);
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

  editOnClick(funcao: HabitoAlimentarDTO): void {
    this.form.showDialog(funcao);
  }

  deleteOnClick(habitoalimentar: HabitoAlimentarDTO): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão do registro"' + habitoalimentar.descricao + '"?',
      () => {
        this.deleteById(habitoalimentar.id);
      });

  }


  private deleteById(toDelete: number) {
    this.habitoalimentarService.delete(toDelete)
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
