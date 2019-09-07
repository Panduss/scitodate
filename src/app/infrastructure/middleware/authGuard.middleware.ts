import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private fireAuth: AngularFireAuth
    ) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.fireAuth.idToken.map(
            (token: string|null) => {

                if (!token) {
                    this.router.navigate(['/login']);
                    return false;
                }

                return true;
            }
        );
    }
}
