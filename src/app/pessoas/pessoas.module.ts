import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PessoaService } from '../services/pessoa-service';
import { SharedModule } from '../shared/shared.module';
import { PessoasNovoComponent } from './pessoas-novo/pessoas-novo.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';

const routes: Routes = [
  {
    path: '',
    component: PessoasPesquisaComponent
  },
  {
    path: 'add',
    component: PessoasNovoComponent
  }
]

@NgModule({
  declarations: [
    PessoasPesquisaComponent,
    PessoasNovoComponent
  ],
  exports: [
    PessoasPesquisaComponent,
    PessoasNovoComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild(routes),
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TranslateModule.forChild(),
    SharedModule,
  ],providers:[
    PessoaService
  ]
})
export class PessoasModule { }
