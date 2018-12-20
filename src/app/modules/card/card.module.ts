import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardControllerDirective } from './directives/card-controller.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CardComponent,
        CardControllerDirective,
    ],
    declarations: [
        CardComponent,
        CardControllerDirective,
    ]
})
export class CardModule {}
