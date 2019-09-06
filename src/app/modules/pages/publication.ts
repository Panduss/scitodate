import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PublicationPage } from '../../components/pages/publication';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../components/header';

const routes: Routes = [{
    path: '',
    component: PublicationPage
}];

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes),
        HeaderModule
    ],
    exports: [
        PublicationPage
    ],
    declarations: [
        PublicationPage
    ],
    entryComponents: [
        PublicationPage
    ]
})
export class PublicationModule {
}
