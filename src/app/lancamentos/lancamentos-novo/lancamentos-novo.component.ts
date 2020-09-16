import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationService } from 'src/app/services/translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lancamentos-novo',
  templateUrl: './lancamentos-novo.component.html',
  styleUrls: ['./lancamentos-novo.component.css']
})
export class LancamentosNovoComponent implements OnInit {

  // Filter Form
  lancamentosForm: FormGroup;
  tipos = [{ label: 'BUTTON.INCOME', value: 'Receita' }, { label: 'BUTTON.EXPENSE', value: 'Despesa' }]

  //calendar locale;
  locale: any;

  constructor(
    private formBuilder: FormBuilder,
    private translationService: TranslationService,
    private router: Router) { }

  ngOnInit() {
    this.lancamentosForm = this.formBuilder.group({
      vencimento: ['', [Validators.required]],
      recebimento: ['', [Validators.required]],
      descricao: ['', [Validators.required, Validators.minLength(5)]],
      valor: ['', [Validators.required]],
      observacao: [''],
      categoria: ['', [Validators.required]],
      pessoa: ['', [Validators.required]],
      tipo: [this.tipos[0].value]
    })
    this.locale = this.translationService.locale;
  }

  back() {
    this.router.navigate(['/lancamentos']);
  }

  salvar() {
    if (this.lancamentosForm.invalid || this.lancamentosForm.pending) {
      let controls = this.lancamentosForm.controls;
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }
  }

}
