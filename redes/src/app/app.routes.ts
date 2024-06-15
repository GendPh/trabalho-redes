import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RedeComponent } from './rede/rede.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'rede', component: RedeComponent,
  }
];
