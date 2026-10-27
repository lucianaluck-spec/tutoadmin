import { Component, OnInit } from '@angular/core';
import { AppService } from '@/shared/services/app.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
  public user;
  public menu = MENU;

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.user = this.appService.user;
  }
}

export const MENU = [
  {
    name: 'Dashboard',
    path: ['/'],
    icon: 'fa-tachometer-alt'
  },
  {
    name: 'Cadastros',
    icon: 'fa-archive',
    children: [
     {
        name: 'Gerações',
        path: ['/grupos']
      },
      {
        name: 'Integrantes/Candidatos',
        path: ['/integrantes']
      },
      {
        name: 'Parametro',
        path: ['/parametro']
      },
      {
        name: 'Status',
        path: ['/status']
      }
    ]
  
  },
 
  {
    name: 'Temas',
    icon: 'fa-archive',
    children: [
      
      {
        name: 'Profissões',
        path: ['/profissoes']
      } ,   
      {
        name: 'Signos',
        path: ['/signos']
      },
      {
        name: 'Ideologia Politica',
        path: ['/politicas']
      },
      {
        name: 'Gênero Musical',
        path: ['/estiloMusicals']
      },
      {
        name: 'Religião',
        path: ['/religiaos']
      },
      {
        name: 'Time de Futebol',
        path: ['/times']
      },
      {
        name: 'Localização',
        path: ['/localizacoes']
      },
      {
        name: 'Temperamentos',
        path: ['/temperamentos']
      },
      {
        name: 'Tipos Sanguineo',
        path: ['/sanguineos']
      },
      {
        name: 'Hábito Alimentar',
        path: ['/habitos']
      },
      {
        name: 'Introdução Tema',
        path: ['/introducaos']
      }

    ]
  }
];
