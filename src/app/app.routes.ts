import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RedeComponent } from './rede/rede.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'rede', component: RedeComponent,
  },
  {
    path: 'orçamento', component: OrcamentoComponent,
  },
  {
    path: '**', redirectTo: '',
  }
];
