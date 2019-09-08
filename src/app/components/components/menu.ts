import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: '../../templates/components/menu.html',
    styleUrls: ['../../styles/components/menu.scss']
})
class Menu implements OnInit, OnDestroy {

    public selectedPath?: string;
    private routeSubscription: Subscription = new Subscription();

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

    public goToHomePage(): void {
        this.router.navigate(['home']);
    }

    public ngOnInit(): void {
        this.routeSubscription = this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationEnd) {
                    this.selectedPath = event.urlAfterRedirects;
                }
            }
        );
    }

    public logout(): void {
        this.firebase.auth.signOut();
        this.router.navigate(['login']);
    }

    public ngOnDestroy(): void {
        this.routeSubscription.unsubscribe();
    }
}

export { Menu as MenuComponent };
