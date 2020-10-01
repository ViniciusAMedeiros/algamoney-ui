import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Lancamento } from '../model/lancamento';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { Paginacao } from '../model/paginacao';

const api = environment.lancamentoAPI;


@Injectable()
export class LancamentoService {

    headers = new HttpHeaders().append('authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');



    constructor(
        private http: HttpClient,
        private datePipe: DatePipe) { }

    buscar(lancamento: Lancamento, pagination: Paginacao): Observable<any> {
        let params = new HttpParams();

        if (lancamento.descricao != '') {
            params = params.append('descricao', lancamento.descricao);
        } if (lancamento.validadeDe) {
            params = params.append('dataVencimentoDe', this.datePipe.transform(lancamento.validadeDe, 'yyyy-MM-dd'));
        } if (lancamento.validadeAte) {
            params = params.append('dataVencimentoAte', this.datePipe.transform(lancamento.validadeAte, 'yyyy-MM-dd'));
        }

        params = params.append('page', pagination.getPage().toString());
        params = params.append('size', pagination.getSize().toString())

        return this.http.get<any>(`${api}?resumo`, { headers: this.headers, params: params });
    }

}