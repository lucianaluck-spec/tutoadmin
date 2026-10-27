import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {LoginComponent} from '@modules/login/login.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {InproguessComponent} from './pages/inproguess/inproguess.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {NonAuthGuard} from './shared/guards/non-auth.guard';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {AboutComponent} from '@pages/about/about.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'blank',
                component: BlankComponent
            },
            {
                path: '',
                component: DashboardComponent
            },
            {
              path: 'about',
              component: AboutComponent
            },
            {
              path: 'profissoes',
              loadChildren: () => import('@modules/profissao/profissao.module').then(m => m.ProfissaoModule)
            },
            {
              path: 'signos',
              loadChildren: () => import('@modules/signo/signo.module').then(m => m.SignoModule)
            },
            {
              path: 'politicas',
              loadChildren: () => import('@modules/politica/politica.module').then(m => m.PoliticaModule)
            },
            {
              path: 'estiloMusicals',
              loadChildren: () => import('@modules/estiloMusical/estiloMusical.module').then(m => m.EstiloMusicalModule)
            },
            {
              path: 'religiaos',
              loadChildren: () => import('@modules/religiao/religiao.module').then(m => m.ReligiaoModule)
            },
            {
              path: 'times',
              loadChildren: () => import('@modules/timeFutebol/time.module').then(m => m.TimeFutebolModule)
            },
            {
              path: 'localizacoes',
              loadChildren: () => import('@modules/localizacao/localizacao.module').then(m => m.LocalizacaoModule)
            },
            {
              path: 'temperamentos',
              loadChildren: () => import('@modules/temperamento/temperamento.module').then(m => m.TemperamentoModule)
            },
            {
              path: 'habitos',
              loadChildren: () => import('@modules/habitoAlimentar/habitoAlimentar.module').then(m => m.HabitoAlimentarModule)
            },
            {
              path: 'habilitacao',
              loadChildren: () => import('@modules/habilitacao/habilitacao.module').then(m => m.HabilitacaoModule)
            },
            {
              path: 'sanguineos',
              loadChildren: () => import('@modules/tipoSanguineo/tipo-sanguineo.module').then(m => m.TipoSanguineoModule)
            },
            {
              path: 'introducaos',
              loadChildren: () => import('@modules/introducao/introducao.module').then(m => m.IntroducaoModule)
            },
            {
              path: 'grupos',
              loadChildren: () => import('@modules/grupo/grupo.module').then(m => m.GrupoModule)
            },
            {
              path: 'inproguess',
              component: InproguessComponent
            },
            {
              path: 'parametro',
              loadChildren: () => import('@modules/parametro/parametro.module').then(m => m.ParametroModule)
            },
            {
              path: 'integrantes',
              loadChildren: () => import('@modules/integrante/integrante.module').then(m => m.IntegranteModule)
            },
            {
              path: 'status',
              loadChildren: () => import('@modules/status/status.module').then(m => m.StatusModule)
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: RecoverPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {path: '**', redirectTo: '/inproguess'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
