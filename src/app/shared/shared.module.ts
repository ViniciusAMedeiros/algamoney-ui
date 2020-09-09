import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LanguageSelectorComponent } from './navbar/language-selector/language-selector.component';
import { TableModule } from 'primeng/table';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from 'primeng/tooltip';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { PessoaComboComponent } from './combo/pessoa-combo/pessoa-combo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PessoaService } from '../services/pessoa-service';
import { CategoriaComboComponent } from './combo/categoria-combo/categoria-combo.component';
import { CategoriaService } from '../services/categoria-service';



@NgModule({
  declarations: [
    DatatableComponent,
    NavbarComponent,
    LanguageSelectorComponent,
    PessoaComboComponent,
    CategoriaComboComponent,
  ],
  exports: [
    DatatableComponent,
    NavbarComponent,
    LanguageSelectorComponent,
    PessoaComboComponent,
    CategoriaComboComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    TooltipModule,
    TranslateModule.forChild(),
    RouterModule,
    BrowserAnimationsModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PessoaService,
    CategoriaService]
})
export class SharedModule { }
