import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListElementComponent } from '../../components/components/listElement';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        ListElementComponent
    ],
    declarations: [
        ListElementComponent
    ]
})
export class ListElementModule {
}
