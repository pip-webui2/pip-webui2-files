import { Component, OnInit, AfterViewInit,  ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { PipThemesService, Theme } from 'pip-webui2-themes';
import { ExmapleListItem } from "./examples-list/shared/examples-list.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public list:  ExmapleListItem[] = [
    {
      name: 'Upload file service',
      id: 'upload_file',
      route: 'upload_file'
    }
  ];

  public themesLocalNames: any = {
    "candy-theme": 'Candy',
    "unicorn-dark-theme": 'Unicorn Dark',
    "pip-blue-theme": 'Blue',
    "pip-grey-theme": 'Grey',
    "pip-pink-theme": 'Pink',
    "pip-green-theme": 'Green',
    "pip-navy-theme": 'Navy',
    "pip-amber-theme": 'Amber',
    "pip-orange-theme": 'Orange',
    "pip-dark-theme": 'Dark',
    "pip-black-theme": 'Black',
    "bootbarn-warm-theme": 'Bootbarn Warm',
    "bootbarn-cool-theme": 'Bootbarn Cool',
    "bootbarn-mono-theme": 'Bootbarn Mono'
  }

  public listIndex: number = 0;
  public themes: Theme[];
  public theme: Theme;
  public activeMediaQuery: boolean;
  public mode: string;
  public app: string = 'Controls';
  public url: string;
  @ViewChild('sidenav') sidenav: MatSidenav;

  public constructor(
    private router: Router,
    private service: PipThemesService,
		public media: ObservableMedia) {

    this.themes = this.service.themes;
    this.theme = this.service.selectedTheme;

    media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change && change.mqAlias == 'xs'? true : false;
      this.mode = change && change.mqAlias == 'xs'? null : 'side';
    })

    router.events.subscribe((url:any) => {
      let index: number;
      
      if (url.url != this.url) {
        this.url = url.url;
        index = this.list.findIndex((item) => {
            return "/" + item.route == this.url;
        });
        this.listIndex = index == -1 ? 0: index; 
      } 
    });

  }

  public ngOnInit() {}

  public ngAfterViewInit() {}

  public changeTheme() {
    this.service.selectedTheme = this.theme;
  }

  public onListItemIndexChanged(index: number) {
    
    this.listIndex = index;
    this.sidenav.close();
  }
  
}
