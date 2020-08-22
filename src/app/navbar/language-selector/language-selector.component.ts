import { filter } from 'rxjs/operators';
import { Component, ElementRef, HostBinding, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { TranslationService } from 'src/app/services/translation.service';

interface LanguageFlag {
	lang: string;
	country: string;
	flag: string;
	active?: boolean;
}

@Component({
	selector: 'm-language-selector',
	templateUrl: './language-selector.component.html',
	styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  
  language: LanguageFlag;
	languages: LanguageFlag[] = [
		{
			lang: 'en',
			country: 'USA',
			flag: 'assets/media/img/flags/020-flag.svg'
		},
		{
			lang: 'es',
			country: 'Spain',
			flag: 'assets/media/img/flags/016-spain.svg'
		},
		{
			lang: 'pt',
			country: 'Brazil',
			flag: 'assets/media/img/flags/011-brazil.svg'
		}
	];

	constructor(
		private translationService: TranslationService,
		private router: Router,
    private el: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
	) {}

	ngOnInit() {
    this.setSelectedLanguage();
		this.router.events
			.pipe(filter(event => event instanceof NavigationStart))
			.subscribe(event => {
        this.setSelectedLanguage();
        this.changeDetectorRef.detectChanges();
			});
	}

	setLanguage(lang) {
		this.languages.forEach((language: LanguageFlag) => {
			if (language.lang === lang) {
				language.active = true;
				this.language = language;
			} else {
				language.active = false;
			}
		});
		this.translationService.setLanguage(lang);
	}

	setSelectedLanguage(): any {
		this.translationService.getSelectedLanguage().subscribe(lang => {
			if (lang) {
        this.setLanguage(lang);
			}
		});
	}
}
