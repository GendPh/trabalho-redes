import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RedeComponent } from './rede/rede.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent, title: 'Home',
  },
  {
    path: 'rede', component: RedeComponent, title: 'Rede',
  },
  {
    path: 'orçamento', component: OrcamentoComponent, title: 'Orçamento',
  },
  {
    path: '**', redirectTo: '',
  }
];