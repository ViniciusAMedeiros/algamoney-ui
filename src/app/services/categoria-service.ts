import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class CategoriaService{
    
    constructor(private http: HttpClient){}

    comboC: any[] = [
        {label: 'Alimentação', value: 'Alimentação'},
        {label: 'Transporte', value: 'Transporte'},]

    combo(): Observable<any[]>{
        return of(this.comboC);
    }    
}