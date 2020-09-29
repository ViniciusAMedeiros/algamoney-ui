import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lancamento } from '../model/lancamento';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const api = environment.lancamentoAPI;


@Injectable()
export class LancamentoService {

    headers = new HttpHeaders().append('authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    
    
    
    constructor(private http: HttpClient) { }

    buscar(lancamento: Lancamento): Observable<any[]> {
        return this.http.get<any[]>(`${api}?resumo`, { headers: this.headers });
    }

}