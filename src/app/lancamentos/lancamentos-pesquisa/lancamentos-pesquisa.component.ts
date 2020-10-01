import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Lancamento } from 'src/app/model/lancamento';
import { LancamentoService } from 'src/app/services/lancamento-service';
import { DecimalPipe, DatePipe } from '@angular/common';
import { TranslationService } from 'src/app/services/translation.service';
import { Paginacao } from 'src/app/model/paginacao';
import { LazyRoute } from '@angular/compiler';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  // Filter Form
  filterForm: FormGroup;
  tableStatus = false;

  //pagination
  pagination: Paginacao = new Paginacao();

  //calendar locale;
  locale: any;

  columns = [
    { columnDef: 'pessoa', header: 'FIELD.PERSON', cell: (row: Lancamento) => row.pessoa },
    { columnDef: 'descricao', header: 'FIELD.DESCRIPTION', cell: (row: Lancamento) => row.descricao },
    { columnDef: 'dataVencimento', header: 'FIELD.DUE_DATE', cell: (row: Lancamento) => row.dataVencimento != null ? this.datePipe.transform(row.dataVencimento,'dd/MM/y'): '' },
    { columnDef: 'dataPagamento', header: 'FIELD.DATE_OF_PAYMENT', cell: (row: Lancamento) => this.datePipe.transform(row.dataPagamento,'dd/MM/y') },
    { columnDef: 'valor', header: 'FIELD.VALUE', align: "right", cell: (row: Lancamento) => this.decimalpipe.transform(row.valor,'1.2-2') },
    
    {
      columnDef: 'actions', header: 'FIELD.ACTIONS', actions: [
        { label: 'ACTION.EDIT', link: './edit' },
        { label: 'ACTION.REMOVE', event: 'callAction1' }
      ],
      cell: (row: Lancamento) => row
    }
  ]

  lancamentos: Lancamento[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private lancamentoService: LancamentoService,
    private decimalpipe: DecimalPipe,
    private datePipe: DatePipe,
    private translationService: TranslationService,
    private changeDetectorRefs: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      descricao: [''],
      validadeDe: [''],
      validadeAte: ['']
    })
    this.locale = this.translationService.locale;
  }

  search(){
    this.tableStatus = true;
    this.lancamentoService.buscar(this.filterForm.getRawValue(),this.pagination).subscribe(res=>{
      console.log(res);
      this.lancamentos = res['content'];
      this.pagination.setTotal(res['totalElements']);
      this.tableStatus = false;
      this.changeDetectorRefs.detectChanges();
    })
  }

  setPage(event){
    this.pagination.setPage(event.first / event.rows);
    event.first != 0 ? this.search(): '';
  }

  remover(){
    //TODO
  }

}
