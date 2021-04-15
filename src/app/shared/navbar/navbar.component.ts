import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    siteLanguage: string = 'Français';
    siteLocale: string;
    languageList = [
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Français' },
        { code: 'ar', label: 'arabe' }
    ];
    public isCollapsed = true;
    public isNavbarCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    constructor(public location: Location, private router: Router) {

    }

    ngOnInit() {
        this.siteLocale = window.location.pathname.split('/')[1];
        this.siteLanguage = this.languageList.find(f => f.code === this.siteLocale).label;
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        if (event instanceof NavigationStart) {
           if (event.url != this.lastPoppedUrl) {
               this.yScrollStack.push(window.scrollY);
           }
       } else if (event instanceof NavigationEnd) {
           if (event.url == this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
           } else {
               window.scrollTo(0, 0);
           }
       }
     });
     this.location.subscribe((ev: PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });
    }

    isHome() {
        let titlee = this.location.prepareExternalUrl(this.location.path());

        if ( titlee === '#/home' ) {
            return true;
        } else {
            return false;
        }
    }
    isDocumentation() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if ( titlee === '#/documentation' ) {
            return true;
        } else {
            return false;
        }
    }

    selectChangeHandler($event: Event) {

    }
}
