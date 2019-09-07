import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WelcomePage } from '../../components/pages/welcome';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../components/header';

const routes: Routes = [{
    path: '',
    component: WelcomePage
}];

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes),
        HeaderModule
    ],
    exports: [
        WelcomePage
    ],
    declarations: [
        WelcomePage
    ],
    entryComponents: [
        WelcomePage
    ]
})
export class WelcomeModule {
}
