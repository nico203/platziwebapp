import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavigationItemComponent} from './components/navigation-item/navigation-item.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {NavigationContainerComponent} from './components/navigation-container/navigation-container.component';
import {NavigationControllerService} from './navigationController.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavigationContainerComponent,
        NavigationComponent
    ],
    declarations: [
        NavigationItemComponent,
        NavigationComponent,
        NavigationContainerComponent
    ],
    providers: [NavigationControllerService]
})
export class NavigationModule {}
