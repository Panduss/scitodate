import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: '../../templates/components/menu.html',
    styleUrls: ['../../styles/components/menu.scss']
})
class Menu implements OnInit {
    public selectedPath = '';

    public pages = [
        {
            title: 'Aquatic Ecophysiology',
            url: '/menu/authors/ac'
        },
        {
            title: 'EPMA Environmental Sciences',
            url: '/menu/authors/ees'
        }
    ];

    public constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
        this.router.events.subscribe((event: RouterEvent) => {
            if (event && event.url) {
                this.selectedPath = event.url;
            }
        });
    }
}

export { Menu as MenuComponent };
