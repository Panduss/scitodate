import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from '../../components/pages/home';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../components/header';

const routes: Routes = [{
    path: '',
    component: HomePage
}];

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes),
        HeaderModule
    ],
    exports: [
        HomePage
    ],
    declarations: [
        HomePage
    ],
    entryComponents: [
        HomePage
    ]
})
export class HomeModule {
}
