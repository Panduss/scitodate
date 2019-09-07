import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from '../../components/pages/login';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

const routes: Routes = [{
    path: '',
    component: LoginPage
}];
@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
    providers: [
        AngularFireAuth
    ],
    declarations: [
        LoginPage
    ]
})
export class LoginModule {
}
