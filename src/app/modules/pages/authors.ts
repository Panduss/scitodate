import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AuthorsPage } from '../../components/pages/authors';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../components/header';

const routes: Routes = [{
     path: '',
     component: AuthorsPage
 }];
@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes),
        HeaderModule
    ],
    declarations: [
        AuthorsPage
    ]
})
export class AuthorsModule {
}
