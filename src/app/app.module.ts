import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { DatatableComponent } from './datatable/datatable.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PessoaService } from './services/pessoa-service';
import { HttpClientModule } from '@angular/common/http';
import { LancamentoService } from './services/lancamento-service';
import { DecimalPipe, DatePipe, AsyncPipe } from '@angular/common';
import { AppRoutingModule } from './app-routing-module.module';
import { HomeComponent } from './home/home.component';
import { LanguageSelectorComponent } from './navbar/language-selector/language-selector.component';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    DatatableComponent,
    HomeComponent,
    LanguageSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    DropdownModule
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
