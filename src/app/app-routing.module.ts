import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './infrastructure/middleware/authGuard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './modules/pages/login#LoginModule'
    },
    {
        path: 'menu',
        loadChildren: './modules/components/menu#MenuModule',
        canActivate: [ AuthGuard ]
    },
    {
        path: 'publication',
        loadChildren: './modules/pages/publication#PublicationModule',
        canActivate: [ AuthGuard ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard
    ]
})
export class AppRoutingModule {

    public constructor(
        private router: Router
    ) {
        this.router.errorHandler = () => {
            this.router.navigate(['menu']);
        };
    }
}
