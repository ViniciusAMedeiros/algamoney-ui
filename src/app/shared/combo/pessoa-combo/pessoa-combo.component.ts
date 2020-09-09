import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PessoaService } from 'src/app/services/pessoa-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pessoa-combo',
  templateUrl: './pessoa-combo.component.html',
  styleUrls: ['./pessoa-combo.component.css']
})
export class PessoaComboComponent implements OnInit {

  pessoa$: Observable<any[]>;
  @Input() isRequired: boolean = false;
  @Input() parentForm: FormGroup;
  @Input() filter: boolean = false;
  
  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    if (this.isRequired) {
      this.parentForm.addControl('pessoa', new FormControl('', Validators.required));
    } else {
      this.parentForm.addControl('pessoa', new FormControl(''));
    }
    this.pessoa$ = this.pessoaService.combo();
  }

}
