import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

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
        private router: Router,
        private firebase: AngularFireAuth
    ) {
    }

    ngOnInit() {
        this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationEnd) {
                    this.selectedPath = event.urlAfterRedirects;
                }
            }
        );
    }

    public async logout(): Promise<void> {
        await this.firebase.auth.signOut();
        await this.router.navigate(['login']);
    }
}

export { Menu as MenuComponent };
