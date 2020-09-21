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
      nome: ['',[Validators.required]],
      logradouro: ['',[Validators.required]],
      numero: ['',[Validators.required]],
      complemento: [''],
      bairro: ['',[Validators.required]],
      cep: ['',[Validators.required]],
      cidade: ['',[Validators.required]],
      estado: ['',[Validators.required]]
    })
  }

  salvar() {
    if(this.pessoasForm.invalid || this.pessoasForm.pending){
      let controls = this.pessoasForm.controls
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
        );
        return ;
    }
    //TODO
  }

  back(){
    this.router.navigate(['/pessoas']);
  }

}
