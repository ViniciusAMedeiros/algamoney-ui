import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pessoa } from '../model/pessoa';
import { Observable, of } from 'rxjs';

@Injectable()
export class PessoaService{

    constructor(private http: HttpClient){}

    pessoas: any[] = [ 
    { nome: 'Manuel Pinheiro', cidade: 'Uberlandia', estado: 'MG', status: 'Ativo' },
    { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', status: 'Inativo' },
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', status: 'Ativo' },
    { nome: 'Luis Pereira', cidade: 'Curitiba', estado: 'PR', status: 'Ativo' },
    { nome: 'Vilma Pereira', cidade: 'Rio de Janeiro', estado: 'RJ', status: 'Inativo' },
  ]

    buscar(pessoa: Pessoa) : Observable<Pessoa[]>{
        return of(this.pessoas);
    }
}