import { StatusDTO } from '@/shared/model/integrante.model ';
import { AppMessageService } from '@/shared/services/app-message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IntegranteService } from '@modules/integrante/services/integrante.service';
import { StatusFormComponent } from '../status-form/status-form.component';
import { StatusService } from '@modules/status/services/status.service';

@Component({
  selector: 'status-grid',
  templateUrl: './status-grid.component.html',
  styleUrls: ['./status-grid.component.scss']
})
export class StatusGridComponent implements OnInit {
@ViewChild(StatusFormComponent)
  form: StatusFormComponent;
  records: StatusDTO[];
  selectedRecords: StatusDTO[];
  selectedRecord: StatusDTO;
  constructor(
     private messageService: AppMessageService,
     private statusService : StatusService
  ) {}

 
   loadRecordList(): void {
     this.statusService.listAll().then(data => this.records = data);
   }
 
   ngOnInit(): void {
     this.loadRecordList();
   }
 
   refreshOnClick(): void {
     this.loadRecordList();
     this.messageService.showSuccess('Lista atualizada com sucesso');
   }
 
 
   editOnClick(status: StatusDTO): void {
     this.form.showDialog(status);
   }
 

}
