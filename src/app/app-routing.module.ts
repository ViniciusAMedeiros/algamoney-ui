import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentosPesquisaComponent } from 'src/app/lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PessoasPesquisaComponent } from 'src/app/pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { HomeComponent } from './home/home.component';
import { LancamentosNovoComponent } from './lancamentos/lancamentos-novo/lancamentos-novo.component';
import { PessoasNovoComponent } from './pessoas/pessoas-novo/pessoas-novo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lancamentos',
    component: LancamentosPesquisaComponent
  },
  {
    path: 'lancamentos/add',
    component: LancamentosNovoComponent
  },
  {
    path: 'pessoas',
    component: PessoasPesquisaComponent
  },
  {
    path: 'pessoas/add',
    component: PessoasNovoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }