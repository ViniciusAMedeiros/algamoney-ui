import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-msg-form',
  templateUrl: './msg-form.component.html',
  styleUrls: ['./msg-form.component.css']
})
export class MsgFormComponent implements OnInit {

  @Input() control: FormControl;
  @Input() type: string;
  @Input() field: string;
  message: string;

  constructor() { }

  ngOnInit() {
    if (this.type === 'required') {
      this.message = 'FIELD.VALIDATION.REQUIRED';
    } if (this.type === 'minlength') {
      this.message = 'FIELD.VALIDATION.MIN_LENGTH';
    }
  }

  hasError(): boolean {
    return this.control.hasError(this.type) && this.control.touched;
  }

}
