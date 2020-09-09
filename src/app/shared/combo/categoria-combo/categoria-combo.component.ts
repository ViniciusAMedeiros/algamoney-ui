import { Component, OnInit, Input } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoria-combo',
  templateUrl: './categoria-combo.component.html',
  styleUrls: ['./categoria-combo.component.css']
})
export class CategoriaComboComponent implements OnInit {

  categoria$: Observable<any[]>;
  @Input() isRequired: boolean = false;
  @Input() parentForm: FormGroup;
  @Input() filter: boolean = false;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    if (this.isRequired) {
      this.parentForm.addControl('categoria', new FormControl('', Validators.required));
    } else {
      this.parentForm.addControl('categoria', new FormControl(''));
    }
    this.categoria$ = this.categoriaService.combo();
  }

}
