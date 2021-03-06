import { Component, ViewChild } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PipThemesService, Theme } from 'pip-webui2-themes';

import { AppTranslations } from './app.strings';
import { ExmapleListItem } from './examples-list/shared/ExampleListItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public themes: Theme[];
  public selectedTheme: Theme;
  public activeMediaQuery: boolean;
  public mode: string;
  public app = 'Files';
  public url: string;
  public langs: string[] = [];
  public selectedLang = 'en';

  public themesLocalNames: any = {
    'candy-theme': 'Candy',
    'unicorn-dark-theme': 'Unicorn Dark',
    'pip-blue-theme': 'Blue',
    'pip-grey-theme': 'Grey',
    'pip-pink-theme': 'Pink',
    'pip-green-theme': 'Green',
    'pip-navy-theme': 'Navy',
    'pip-amber-theme': 'Amber',
    'pip-orange-theme': 'Orange',
    'pip-dark-theme': 'Dark',
    'pip-black-theme': 'Black',
    'bootbarn-warm-theme': 'Bootbarn Warm',
    'bootbarn-cool-theme': 'Bootbarn Cool',
    'bootbarn-mono-theme': 'Bootbarn Mono',
    'mst-black-theme': 'MST Black',
    'mst-black-dark-theme': 'MST Black Dark',
    'mst-mono-theme': 'MST Mono',
    'mst-orange-theme': 'MST Orange',
    'mst-orange-dark-theme': 'MST Orange Dark',
    'mst-elegant-theme': 'MST Elegant'
  };

  public list: ExmapleListItem[] = [
    {
      name: 'Upload file service',
      id: 'upload_files',
      route: 'upload_files'
    }
  ];
  public listIndex = 0;
  @ViewChild('sidenav') sidenav: MatSidenav;

  public constructor(
    private themeService: PipThemesService,
    private router: Router,
    public media: MediaObserver,
    private translate: TranslateService
  ) {
    this.selectedTheme = this.themeService.selectedTheme;
    this.themes = this.themeService.themes;

    translate.setDefaultLang(this.selectedLang);
    translate.use(this.selectedLang);
    this.langs = translate.getLangs();
    this.translate.setTranslation('en', AppTranslations.en, true);
    this.translate.setTranslation('ru', AppTranslations.ru, true);

    this.media.media$.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change && change.mqAlias === 'xs' ? true : false;
      this.mode = change && change.mqAlias === 'xs' ? null : 'side';
    });

    router.events.subscribe((url: any) => {

      if (url.url && url.url !== this.url) {
        this.url = url.url;
        this.listIndex = this.list.findIndex((item) => {
          return '/' + item.route === this.url;
        });

        this.listIndex = this.listIndex < 0 ? 0 : this.listIndex;
      }
    });

  }

  public onListItemIndexChanged(index: number) {

    this.listIndex = index;
    this.sidenav.close();
  }

  public changeTheme(theme) {
    this.selectedTheme = theme;
    this.themeService.selectedTheme = theme;
  }

  public changeLanguage(lang) {
    this.selectedLang = lang;
    this.translate.use(lang);
  }
}
