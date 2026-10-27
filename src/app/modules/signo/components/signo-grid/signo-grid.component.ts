import { SignoDTO } from '@/shared/model/signo.model';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SignoService } from '@modules/signo/services/signo.service';
import { SignoFormComponent } from '../signo-form/signo-form.component';

@Component({
  selector: 'signo-grid',
  templateUrl: './signo-grid.component.html',
  styleUrls: ['./signo-grid.component.scss']
})
export class SignoGridComponent implements OnInit {

  @ViewChild(SignoFormComponent)
  form: SignoFormComponent;

  records: SignoDTO[];
  selectedRecords: SignoDTO[];
  selectedRecord: SignoDTO;

  constructor(
    private signoService: SignoService,
    private messageService: AppMessageService
  ) {}

  private deleteRecords(toDelete: SignoDTO[]): boolean {
    let errors = 0;
    toDelete.forEach(each =>
      this.signoService.delete(each.id)
        .then(()=> this.records = this.records.filter(val => val.id !== each.id))
        .catch(error => {
          errors++;
          console.error(error);
        }));
    return errors === 0;
  }

  loadRecordList(): void {
    this.signoService.listAll().then(data => this.records = data);
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

  editOnClick(funcao: SignoDTO): void {
    this.form.showDialog(funcao);
  }

  deleteOnClick(signo: SignoDTO): void {
    this.messageService.showConfirmation(
      'Confirma a exclusão do registro"' + signo.nome + '"?',
      () => {
        this.deleteById(signo.id);
      });

  }


  private deleteById(toDelete: number) {
    this.signoService.delete(toDelete)
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
