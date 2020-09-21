import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../shared/shared.module';
import { LancamentosNovoComponent } from './lancamentos-novo/lancamentos-novo.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';

const routes: Routes = [
  {
    path: '',
    component: LancamentosPesquisaComponent
  },
  {
    path: 'add',
    component: LancamentosNovoComponent
  }
]


@NgModule({
  declarations: [
    LancamentosPesquisaComponent,
    LancamentosNovoComponent
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
    SelectButtonModule,
    CalendarModule,
    CurrencyMaskModule,
    InputTextareaModule    
  ]
})
export class LancamentosModule { }
