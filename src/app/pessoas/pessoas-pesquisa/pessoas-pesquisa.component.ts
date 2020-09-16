import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoaService } from '../../services/pessoa-service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  // Filter Form
  filterForm: FormGroup;
  tableStatus = false;

  columns = [
    { columnDef: 'nome', header: 'FIELD.NAME', cell: (row: Pessoa) => row.nome },
    { columnDef: 'cidade', header: 'FIELD.CITY', cell: (row: Pessoa) => row.cidade },
    { columnDef: 'estado', header: 'FIELD.STATE', cell: (row: Pessoa) => row.estado },
    { columnDef: 'status', header: 'FIELD.STATUS', cell: (row: Pessoa) => row.status },
    {
      columnDef: 'actions', header: 'FIELD.ACTIONS', actions: [
        { label: 'ACTION.EDIT', link: './edit' },
        { label: 'ACTION.REMOVE', event: 'callAction1' }
      ], cell: (row: Pessoa) => row
    }
  ]

  pessoas: Pessoa[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      nome: [""]
    })

  }

  search() {
    this.pessoaService.buscar(this.filterForm.getRawValue()).subscribe(res => {
      this.tableStatus = true;
      this.pessoas = res;
    });
  }

}
