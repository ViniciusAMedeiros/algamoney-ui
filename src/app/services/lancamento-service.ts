import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lancamento } from '../model/lancamento';
import { Observable, of } from 'rxjs';

@Injectable()
export class LancamentoService {

    constructor(private http: HttpClient) { }

    lancamentos: any[] = [
        { tipo: 'RECEITA', descricao: 'Salario', dataVencimento: new Date(2020,2,13), dataPagamento: null, valor: 6000, pessoa: 'Vinicius de Araujo Medeiros' },
        { tipo: 'DESPESA', descricao: 'Escola', dataVencimento: new Date(2020,2,20), dataPagamento: new Date(2020,3,20), valor: 799.00, pessoa: 'Alan Cesar Piassa' },
        { tipo: 'RECEITA', descricao: 'Juros', dataVencimento: new Date(2020,1,1), dataPagamento: new Date(2020,4,5), valor: 300, pessoa: 'Vinicius de Araujo Medeiros' },
    ];

    buscar(lancamento: Lancamento): Observable<Lancamento[]> {
        return of(this.lancamentos);
    }

}