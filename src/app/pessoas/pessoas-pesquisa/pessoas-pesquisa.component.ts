import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoaService } from '../../services/pessoa-service';
import { Paginacao } from 'src/app/model/paginacao';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  // Filter Form
  filterForm: FormGroup;
  tableStatus = false;

  //pagination
  pagination: Paginacao = new Paginacao();

  columns = [
    { columnDef: 'nome', header: 'FIELD.NAME', cell: (row: Pessoa) => row.nome },
    { columnDef: 'cidade', header: 'FIELD.CITY', cell: (row: Pessoa) => row.endereco.cidade },
    { columnDef: 'estado', header: 'FIELD.STATE', cell: (row: Pessoa) => row.endereco.estado },
    { columnDef: 'status', header: 'FIELD.STATUS', cell: (row: Pessoa) => row.ativo },
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
    private pessoaService: PessoaService,
    private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      nome: [""]
    })

  }

  search() {
    this.tableStatus = true;
    this.pessoaService.buscar(this.filterForm.getRawValue(),this.pagination).subscribe(res => {
      this.tableStatus = true;
      this.pessoas = res['content'];
      this.pagination.setTotal(res['totalElements']);
      this.tableStatus = false;
      this.changeDetectorRefs.detectChanges();
    });
  }

  setPage(event) {
    if (this.pagination.getPage() != event.first) {
      this.pagination.setPage(event.first / event.rows);
      this.search();
    }
  }

}
