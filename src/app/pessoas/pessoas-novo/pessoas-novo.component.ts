import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-novo',
  templateUrl: './pessoas-novo.component.html',
  styleUrls: ['./pessoas-novo.component.css']
})
export class PessoasNovoComponent implements OnInit {

  pessoasForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.pessoasForm = this.formBuilder.group({
      nome: [''],
      logradouro: [''],
      numero: [''],
      complemento: [''],
      bairro: [''],
      cep: [''],
      cidade: [''],
      estado: ['']
    })
  }

  salvar() {
    console.log(this.pessoasForm.getRawValue());
  }

  back(){
    this.router.navigate(['/pessoas']);
  }

}
