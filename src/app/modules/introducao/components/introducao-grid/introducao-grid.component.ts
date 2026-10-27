import { IntroducaoDTO } from '@/shared/model/introducao.model';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IntroducaoService } from '@modules/introducao/services/introducao.service';
import { IntroducaoFormComponent } from '../introducao-form/introducao-form.component';

@Component({
  selector: 'introducao-grid',
  templateUrl: './introducao-grid.component.html',
  styleUrls: ['./introducao-grid.component.scss']
})
export class IntroducaoGridComponent implements OnInit {

  @ViewChild(IntroducaoFormComponent)
  form: IntroducaoFormComponent;

  records: IntroducaoDTO[];
  selectedRecords: IntroducaoDTO[];
  selectedRecord: IntroducaoDTO;

  constructor(
    private introducaoService: IntroducaoService,
    private messageService: AppMessageService
  ) {}

  private deleteRecords(toDelete: IntroducaoDTO[]): boolean {
    let errors = 0;
    toDelete.forEach(each =>
      this.introducaoService.delete(each.id)
        .then(()=> this.records = this.records.filter(val => val.id !== each.id))
        .catch(error => {
          errors++;
          console.error(error);
        }));
    return errors === 0;
  }

  loadRecordList(): void {
    this.introducaoService.listAll().then(data => this.records = data);
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

  editOnClick(funcao: IntroducaoDTO): void {
    this.form.showDialog(funcao);
  }

  deleteOnClick(introducao: IntroducaoDTO): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão do registro"' + introducao.tema + '"?',
      () => {
        this.deleteById(introducao.id);
      });

  }


  private deleteById(toDelete: number) {
    this.introducaoService.delete(toDelete)
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
