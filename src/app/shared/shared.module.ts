import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CategoriaService } from '../services/categoria-service';
import { PessoaService } from '../services/pessoa-service';
import { CategoriaComboComponent } from './combo/categoria-combo/categoria-combo.component';
import { PessoaComboComponent } from './combo/pessoa-combo/pessoa-combo.component';
import { DatatableComponent } from './datatable/datatable.component';
import { MsgFormComponent } from './msg-form/msg-form.component';



@NgModule({
  declarations: [
    DatatableComponent,
    PessoaComboComponent,
    CategoriaComboComponent,
    MsgFormComponent,
  ],
  exports: [
    DatatableComponent,
    PessoaComboComponent,
    CategoriaComboComponent,
    MsgFormComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TooltipModule,
    TranslateModule.forChild(),
    RouterModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PessoaService,
    CategoriaService]
})
export class SharedModule { }
