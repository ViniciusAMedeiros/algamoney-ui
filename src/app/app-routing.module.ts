import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lancamentos',
    loadChildren: './lancamentos/lancamentos.module#LancamentosModule'
  },
  {
    path: 'pessoas',
    loadChildren: './pessoas/pessoas.module#PessoasModule'

  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }