import { Component, OnInit, Input } from '@angular/core';
import { TareasService } from '../services/tareas.service';
import { Tarea } from '../models/tarea';
import { TareasModalService } from '../services/tareas-modal.service';

@Component({
    selector: 'app-lista-tareas',
    templateUrl: './lista-tareas.component.html',
    styleUrls: ['./lista-tareas.component.scss'],
})
export class ListaTareasComponent implements OnInit {

    @Input() estadoTareas: string = 'todas';

    tareas: Tarea[] = [];

    constructor(private tareasService: TareasService,
        private tareasModalService: TareasModalService) {}

    ngOnInit() {
        this.tareas = this.tareasService.getTareas();
    }

    borrarTarea(tarea: Tarea) {
        this.tareasService.deleteTarea(tarea);
    }

    verTarea(tarea: Tarea) {
        this.tareasModalService.open(tarea);
    }
}
