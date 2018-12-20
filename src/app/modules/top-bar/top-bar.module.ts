import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationModule} from '../navigation/navigation.module';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {HamburgerComponent} from './components/hamburger/hamburger.component';

/**
 * TODO: importar componentes de angular solo si estan disponibles los módulos
 */

@NgModule({
    imports: [
        CommonModule,
        NavigationModule,
    ],
    exports: [
        TopBarComponent,
        HamburgerComponent
    ],
    declarations: [
        TopBarComponent,
        HamburgerComponent
    ]
})
export class TopBarModule {}
