import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LancamentosPesquisaComponent } from 'src/app/lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PessoasPesquisaComponent } from 'src/app/pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PessoaService } from './services/pessoa-service';
import { HttpClientModule } from '@angular/common/http';
import { LancamentoService } from './services/lancamento-service';
import { DecimalPipe, DatePipe, AsyncPipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DropdownModule } from 'primeng/dropdown';
import { LancamentosNovoComponent } from './lancamentos/lancamentos-novo/lancamentos-novo.component';
import { CalendarModule } from 'primeng/calendar'
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SharedModule } from './shared/shared.module';
import { PessoasNovoComponent } from './pessoas/pessoas-novo/pessoas-novo.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    PessoasPesquisaComponent,
    HomeComponent,
    LancamentosNovoComponent,
    PessoasNovoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    DropdownModule,
    CalendarModule,
    CurrencyMaskModule,
    InputTextareaModule,
    SelectButtonModule,
    SharedModule,
  ],
  providers: [
    PessoaService,
    LancamentoService,
    DecimalPipe,
    DatePipe,
    AsyncPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
