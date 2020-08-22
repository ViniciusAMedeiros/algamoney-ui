import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Lancamento } from '../model/lancamento';
import { LancamentoService } from '../services/lancamento-service';
import { DecimalPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  // Filter Form
  filterForm: FormGroup;
  tableStatus = false;

  columns = [
    { columnDef: 'tipo', header: 'FIELD.TYPE', cell: (row: Lancamento) => row.tipo },
    { columnDef: 'descricao', header: 'FIELD.DESCRIPTION', cell: (row: Lancamento) => row.descricao },
    { columnDef: 'dataVencimento', header: 'FIELD.DUE_DATE', cell: (row: Lancamento) => row.dataVencimento != null ? this.datePipe.transform(row.dataVencimento,'dd/MM/y'): '' },
    { columnDef: 'dataPagamento', header: 'FIELD.DATE_OF_PAYMENT', cell: (row: Lancamento) => this.datePipe.transform(row.dataPagamento,'dd/MM/y') },
    { columnDef: 'valor', header: 'FIELD.VALUE', align: "right", cell: (row: Lancamento) => this.decimalpipe.transform(row.valor,'1.2-2') },
    { columnDef: 'pessoa', header: 'FIELD.PERSON', cell: (row: Lancamento) => row.pessoa },
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
    private datePipe: DatePipe
    ) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      descricao: ['',Validators.required],
      validadeDe: [''],
      validadeAte: ['']
    })
    this.filterForm.markAsUntouched();
    this.filterForm.updateValueAndValidity();
  }

  search(){
    this.lancamentoService.buscar(this.filterForm.getRawValue()).subscribe(res=>{
      this.tableStatus = true;
      this.lancamentos = res;
    })
  }

  remover(){
    console.log("TESTE");
  }

}
