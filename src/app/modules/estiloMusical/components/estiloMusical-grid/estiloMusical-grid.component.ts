import { EstiloMusicalDTO } from '@/shared/model/estiloMusical.model';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EstiloMusicalService } from '@modules/estiloMusical/services/estiloMusical.service';
import { EstiloMusicalFormComponent } from '../estiloMusical-form/estiloMusical-form.component';

@Component({
  selector: 'estiloMusical-grid',
  templateUrl: './estiloMusical-grid.component.html',
  styleUrls: ['./estiloMusical-grid.component.scss']
})
export class EstiloMusicalGridComponent implements OnInit {

  @ViewChild(EstiloMusicalFormComponent)
  form: EstiloMusicalFormComponent;

  records: EstiloMusicalDTO[];
  selectedRecords: EstiloMusicalDTO[];
  selectedRecord: EstiloMusicalDTO;

  constructor(
    private estiloMusicalService: EstiloMusicalService,
    private messageService: AppMessageService
  ) {}

  private deleteRecords(toDelete: EstiloMusicalDTO[]): boolean {
    let errors = 0;
    toDelete.forEach(each =>
      this.estiloMusicalService.delete(each.id)
        .then(()=> this.records = this.records.filter(val => val.id !== each.id))
        .catch(error => {
          errors++;
          console.error(error);
        }));
    return errors === 0;
  }

  loadRecordList(): void {
    this.estiloMusicalService.listAll().then(data => this.records = data);
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

  editOnClick(funcao: EstiloMusicalDTO): void {
    this.form.showDialog(funcao);
  }

  deleteOnClick(estiloMusical: EstiloMusicalDTO): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão do registro"' + estiloMusical.nome + '"?',
      () => {
        this.deleteById(estiloMusical.id);
      });

  }


  private deleteById(toDelete: number) {
    this.estiloMusicalService.delete(toDelete)
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
