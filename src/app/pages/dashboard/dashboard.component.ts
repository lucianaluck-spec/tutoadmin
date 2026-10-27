import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  basicData: any;
  basicOptions: any;
  chartOptions: any;
  subscription: Subscription;
  data: any;
  totalVendido: number;
  totalVendidoSemIndicacao: number;
  totalAcerto: number;
  dataInicio: string = new Date().toISOString().split('T')[0];
  dataFinal: string = new Date().toISOString().split('T')[0];
  nomeFamilia: string = "Familia Turchetta/Torquete"


  constructor(
  ) { }

  ngOnInit(): void {
    var dataAtual = new Date();
    var anoC = dataAtual.getFullYear();
    var mesC = dataAtual.getMonth();

    this.dataInicio = new Date(anoC, mesC, 1).toISOString().split('T')[0];

  }


  updateChartOptions() {
    this.applyLightTheme();
  }

  applyDarkTheme() {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        y: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    };

  }

  applyLightTheme() {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
  }

}
