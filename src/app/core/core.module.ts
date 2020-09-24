import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { LanguageSelectorComponent } from './navbar/language-selector/language-selector.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LanguageSelectorComponent
  ],
  exports: [
    NavbarComponent,
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    DropdownModule,
    RouterModule
  ]
})
export class CoreModule { }
