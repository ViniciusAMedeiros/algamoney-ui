import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-lancamentos-novo',
  templateUrl: './lancamentos-novo.component.html',
  styleUrls: ['./lancamentos-novo.component.css']
})
export class LancamentosNovoComponent implements OnInit {

  // Filter Form
  lancamentosForm: FormGroup;

  //calendar locale;
  locale: any;

  constructor(
    private formBuilder: FormBuilder,
    private translationService: TranslationService) { }

  ngOnInit() {
    
    this.lancamentosForm = this.formBuilder.group({
      vencimento: [''],
      recebimento: [''],
      descricao: [''],
      valor: ['0']
    })
    this.locale = this.translationService.locale;
    console.log(this.locale); 
  }

}
