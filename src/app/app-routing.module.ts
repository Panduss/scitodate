import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'authors',
        pathMatch: 'full'
    },
    {
        path: 'authors',
        loadChildren: './modules/pages/authors#AuthorsModule'
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
