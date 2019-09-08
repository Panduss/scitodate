import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from '../../components/components/menu';
import { AuthGuard } from '../../infrastructure/middleware/authGuard';

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: '../pages/home#HomeModule'
            },
            {
                path: 'authors/:id',
                loadChildren: '../pages/authors#AuthorsModule'
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        MenuComponent
    ]
})
export class MenuModule {
}
