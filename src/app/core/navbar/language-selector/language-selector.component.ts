import { filter } from 'rxjs/operators';
import { Component, ElementRef, HostBinding, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { TranslationService } from 'src/app/services/translation.service';
import { SelectItem } from 'primeng/components/common/selectitem';

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
			lang: 'pt',
			country: 'Brazil',
			flag: 'assets/media/img/flags/011-brazil.svg'
		},
		{
			lang: 'en',
			country: 'USA',
			flag: 'assets/media/img/flags/020-flag.svg'
		},
		{
			lang: 'es',
			country: 'Spain',
			flag: 'assets/media/img/flags/016-spain.svg'
		}
	];


	constructor(
		private translationService: TranslationService,
		private router: Router,
		private changeDetectorRef: ChangeDetectorRef
	) { }

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
		this.getLocaleByLang(lang);
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
				this.language = lang;
				this.changeDetectorRef.detectChanges();
			}
		});
	}

	getLocaleByLang(lang) {
		lang === '[object Object]' ? lang = 'pt' : lang;
		if (lang === 'pt') {
			this.translationService.locale = {
				firstDayOfWeek: 0,
				dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
				dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
				dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
				monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
					'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
				monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
				today: 'Hoje',
				clear: 'Limpar',
				dateFormat: 'dd/mm/yy',
				weekHeader: 'Semana',
				monetary: { prefix: '', thousands: '.', decimal: ',' }
			};
		} else if (lang === 'en') {
			this.translationService.locale = {
				firstDayOfWeek: 0,
				dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
				monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				today: 'Today',
				clear: 'Clear',
				dateFormat: 'mm/dd/yy',
				weekHeader: 'Week',
				monetary: { prefix: '', thousands: ',', decimal: '.' }
			};
		} else if (lang === 'es') {
			this.translationService.locale = {
				firstDayOfWeek: 0,
				dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
				dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
				dayNamesMin: [ "D","L","M","X","J","V","S" ],
				monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
				monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
				today: 'Hoy',
				clear: 'Borrar',
				dateFormat: 'mm/dd/yy',
				weekHeader: 'Semana',
				monetary: { prefix: '', thousands: '.', decimal: ',' }
			};
		}
	}


}
