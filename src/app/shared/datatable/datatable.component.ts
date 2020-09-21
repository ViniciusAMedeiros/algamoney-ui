import { Component, OnInit, Input, DoCheck, EventEmitter, KeyValueDiffers, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatatableColumn } from './datatable-column';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit, DoCheck {

  @Input() data: any[] = [];
  @Input() columns: DatatableColumn[];
  @Input() pag: boolean = false;
  @Input() rows: number = 0;
  @Input() resp: boolean = false;
  @Input() isLoading: boolean;
  @Output() action1 = new EventEmitter();


  iterableDiffer: any;

  constructor(
    private translateService: TranslateService,
    private _iterableDiffers: KeyValueDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create();
  }

  ngOnInit() {

  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.data);
    if (changes) {
      this.isLoading = false;
    }
  }

  getIcon(label: string) {
    if (label == "ACTION.EDIT") {
      return "pi pi-pencil";
    } else if (label == "ACTION.REMOVE") {
      return "pi pi-trash";
    }
  }

  getTip(label: string) {
    if (label == "ACTION.EDIT") {
      return this.translateService.instant("ACTION.EDIT");
    } else if (label == "ACTION.REMOVE") {
      return this.translateService.instant("ACTION.REMOVE");
    }
  }

  setClass(row: any, col: any) {
    let _class = "";
    if (row.tipo === "DESPESA" && col.columnDef === "valor") {
      _class = "red";
    } if (row.tipo === "RECEITA" && col.columnDef === "valor") {
      _class = "blue";
    } if (col['align']) {
      _class += " col-text-align-" + col.align;
    } else {
      _class = "";
    }
    return _class;
  }

  setColSize(col: any) {
    let _class = ""
    if (col.columnDef === "actions") {
      _class = 'action-col-size';
    } else {
      if (col['colSize']) {
        _class = "col-size-" + col.colSize;
      }
    }
    return _class;
  }

  setBtnColor(action: any){
    let _class = "";
    if(action.label === "ACTION.EDIT"){
      _class = "btn-blue";
    }else if(action.label === "ACTION.REMOVE"){
      _class = " btn-red";
    }
    return _class;
  }

  actionInvoke(event: string, row: any) {
    let methodName = event;
    if (this[methodName]) {
      this[event](row);
    }
  }

  callAction1(row: any) {
    this.action1.emit(row);
  }

}
