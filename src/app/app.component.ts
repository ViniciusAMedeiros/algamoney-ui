import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TranslationService } from './services/translation.service';
// language list
import { locale as enLang } from './config/i18n/en';
import { locale as ptLang } from './config/i18n/pt';
import { locale as esLang } from './config/i18n/es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  
  constructor(private translationService: TranslationService) {
    // register translations
    this.translationService.loadTranslations(enLang, ptLang, esLang);
  } 


  ngOnInit(){
    this.translationService.setLanguage(this.translationService.getSelectedLanguage());
  }

}
