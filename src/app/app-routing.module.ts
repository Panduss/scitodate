import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './modules/pages/login#LoginModule'
    },
    {
        path: 'menu',
        loadChildren: './modules/components/menu#MenuModule'
    },
    {
        path: 'publication',
        loadChildren: './modules/pages/publication#PublicationModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
