import { TipoSanguineoDTO } from '@/shared/model/tipoSanguineo.model';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoSanguineoService } from '@modules/tipoSanguineo/services/tipo-sanguineo.service';
import { TipoSanguineoFormComponent } from '../tipo-sanguineo-form/tipo-sanguineo-form.component';

@Component({
  selector: 'tipo-sanguineo-grid',
  templateUrl: './tipo-sanguineo-grid.component.html',
  styleUrls: ['./tipo-sanguineo-grid.component.scss']
})
export class TipoSanguineoGridComponent implements OnInit {

  @ViewChild(TipoSanguineoFormComponent)
  form: TipoSanguineoFormComponent;

  records: TipoSanguineoDTO[];
  selectedRecords: TipoSanguineoDTO[];
  selectedRecord: TipoSanguineoDTO;

  constructor(
    private tiposanguineoService: TipoSanguineoService,
    private messageService: AppMessageService
  ) {}

  private deleteRecords(toDelete: TipoSanguineoDTO[]): boolean {
    let errors = 0;
    toDelete.forEach(each =>
      this.tiposanguineoService.delete(each.id)
        .then(()=> this.records = this.records.filter(val => val.id !== each.id))
        .catch(error => {
          errors++;
          console.error(error);
        }));
    return errors === 0;
  }

  loadRecordList(): void {
    this.tiposanguineoService.listAll().then(data => this.records = data);
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

  editOnClick(funcao: TipoSanguineoDTO): void {
    this.form.showDialog(funcao);
  }

  deleteOnClick(tiposanguineo: TipoSanguineoDTO): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão do registro"' + tiposanguineo.descricao + '"?',
      () => {
        this.deleteById(tiposanguineo.id);
      });

  }


  private deleteById(toDelete: number) {
    this.tiposanguineoService.delete(toDelete)
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
