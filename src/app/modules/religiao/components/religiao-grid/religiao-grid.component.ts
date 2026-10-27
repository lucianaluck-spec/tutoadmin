import { ReligiaoDTO } from '@/shared/model/religiao.model';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ReligiaoService } from '@modules/religiao/services/religiao.service';
import { ReligiaoFormComponent } from '../religiao-form/religiao-form.component';

@Component({
  selector: 'religiao-grid',
  templateUrl: './religiao-grid.component.html',
  styleUrls: ['./religiao-grid.component.scss']
})
export class ReligiaoGridComponent implements OnInit {

  @ViewChild(ReligiaoFormComponent)
  form: ReligiaoFormComponent;

  records: ReligiaoDTO[];
  selectedRecords: ReligiaoDTO[];
  selectedRecord: ReligiaoDTO;

  constructor(
    private religiaoService: ReligiaoService,
    private messageService: AppMessageService
  ) {}

  private deleteRecords(toDelete: ReligiaoDTO[]): boolean {
    let errors = 0;
    toDelete.forEach(each =>
      this.religiaoService.delete(each.id)
        .then(()=> this.records = this.records.filter(val => val.id !== each.id))
        .catch(error => {
          errors++;
          console.error(error);
        }));
    return errors === 0;
  }

  loadRecordList(): void {
    this.religiaoService.listAll().then(data => this.records = data);
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

  editOnClick(funcao: ReligiaoDTO): void {
    this.form.showDialog(funcao);
  }

  deleteOnClick(religiao: ReligiaoDTO): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão do registro"' + religiao.nome + '"?',
      () => {
        this.deleteById(religiao.id);
      });

  }


  private deleteById(toDelete: number) {
    this.religiaoService.delete(toDelete)
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
