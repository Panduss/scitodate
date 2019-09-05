import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListPage } from '../../components/pages/list';
import { RouterModule, Routes } from '@angular/router';
import { ListElementModule } from '../components/listElement';
import { HeaderModule } from '../components/header';
import { MatButtonModule, MatExpansionModule } from '@angular/material';

const routes: Routes = [{
     path: '',
     component: ListPage
 }];
@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes),
        ListElementModule,
        HeaderModule,
        MatExpansionModule,
        MatButtonModule
    ],
    declarations: [
        ListPage
    ]
})
export class ListModule {
}

