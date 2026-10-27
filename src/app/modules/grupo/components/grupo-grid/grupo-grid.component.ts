import { GrupoDTO, GrupoRelacionamentoResponseDTO } from '@/shared/model/grupo.model';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GrupoService } from '@modules/grupo/services/grupo.service';
import { GrupoFormComponent } from '../grupo-form/grupo-form.component';

@Component({
  selector: 'grupo-grid',
  templateUrl: './grupo-grid.component.html',
  styleUrls: ['./grupo-grid.component.scss']
})
export class GrupoGridComponent implements OnInit {

  @ViewChild(GrupoFormComponent)
  form: GrupoFormComponent;

  records: GrupoRelacionamentoResponseDTO[];
  selectedRecords: GrupoRelacionamentoResponseDTO[];
  selectedRecord: GrupoDTO;

  constructor(
    private grupoService: GrupoService,
    private messageService: AppMessageService
  ) {}

  private deleteRecords(toDelete: GrupoDTO[]): boolean {
    let errors = 0;
    toDelete.forEach(each =>
      this.grupoService.delete(each.id)
        .then(()=> this.records = this.records.filter(val => val.id !== each.id))
        .catch(error => {
          errors++;
          console.error(error);
        }));
    return errors === 0;
  }

  loadRecordList(): void {
    this.grupoService.listAll().then(data => this.records = data);
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

  editOnClick(grupo: GrupoRelacionamentoResponseDTO): void {
    this.grupoService.getByID(grupo.id).then(data =>  this.form.showDialog(data));
    
  }

  deleteOnClick(grupo: GrupoDTO): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão do registro"' + grupo.descricao + '"?',
      () => {
        this.deleteById(grupo.id);
      });
  }

 
  private deleteById(toDelete: number) {
    this.grupoService.delete(toDelete)
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
