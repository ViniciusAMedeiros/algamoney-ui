import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Pessoa } from '../model/pessoa';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paginacao } from '../model/paginacao';

const api = environment.pessoaAPI;

@Injectable()
export class PessoaService {

  headers = new HttpHeaders().append('authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

  constructor(private http: HttpClient) { }

  pessoas: any[] = [
    { nome: 'Manuel Pinheiro', cidade: 'Uberlandia', estado: 'MG', status: 'Ativo' },
    { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', status: 'Inativo' },
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', status: 'Ativo' },
    { nome: 'Luis Pereira', cidade: 'Curitiba', estado: 'PR', status: 'Ativo' },
    { nome: 'Vilma Pereira', cidade: 'Rio de Janeiro', estado: 'RJ', status: 'Inativo' },
  ]

  comboP: any[] = [
    { label: 'Manuel Pinheiro', value: 'Manuel Pinheiro' },
    { label: 'Sebastião da Silva', value: 'Sebastião da Silva' },
    { label: 'Carla Souza', value: 'Carla Souza' },
    { label: 'Luis Pereira', value: 'Luis Pereira' },
    { label: 'Vilma Pereira', value: 'Vilma Pereira' },
  ]

  buscar(pessoa: Pessoa, pagination: Paginacao): Observable<any[]> {
    let params = new HttpParams();
    console.log(pessoa.nome);
    if (pessoa.nome != '') {
      params = params.append('nome', pessoa.nome)
    }

    params = params.append('page', pagination.getPage().toString());
    params = params.append('size', pagination.getSize().toString());

    return this.http.get<any>(`${api}`, { headers: this.headers, params: params })

  }

  combo(): Observable<Pessoa[]> {
    return of(this.comboP)
  }

}