import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';

import {NavigationModule} from './modules/navigation/navigation.module';
import {TopBarModule} from './modules/top-bar/top-bar.module';
import {CardModule} from './modules/card/card.module';

import { AppComponent } from './app.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { TodasTareasComponent } from './todas-tareas/todas-tareas.component';
import { CategoriaTareasComponent } from './categoria-tareas/categoria-tareas.component';
import { TareasModalComponent } from './tareas-modal/tareas-modal.component';
import { ItemNav } from './modules/navigation/ItemNav';
import { NavigationControllerService } from './modules/navigation/navigationController.service';
import { FiltrarTareasPipe } from './pipes/filtrar-tareas.pipe';


const routes: Routes = [
    {path: 'todas', component: TodasTareasComponent},
    // {path: 'categorias', component: CategoriaTareasComponent},
    {path: '', redirectTo: '/todas', pathMatch: 'full'},
];

const items: ItemNav[] = [
    {name: 'Tareas', route: routes[0]},
    // {name: 'Categorías', route: routes[1]},
];

@NgModule({
    declarations: [
        AppComponent,
        ListaTareasComponent,
        AgregarTareaComponent,
        TodasTareasComponent,
        CategoriaTareasComponent,
        TareasModalComponent,
        FiltrarTareasPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        NavigationModule,
        TopBarModule,
        CardModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private navigationControllerService: NavigationControllerService) {
        this.navigationControllerService.setItems(items);
    }
}
