import {Component, AfterViewInit, ElementRef} from '@angular/core';
import {Observable} from 'rxjs';
import * as $ from 'jquery';
import 'foundation-sites';
import { Tarea } from '../models/tarea';
import { TareasModalService } from '../services/tareas-modal.service';
import { TareasService } from '../services/tareas.service';

@Component({
    selector: 'app-tareas-modal',
    templateUrl: './tareas-modal.component.html',
    styleUrls: ['./tareas-modal.component.scss']
})
export class TareasModalComponent implements AfterViewInit {

    $elem: JQuery;
    reveal: FoundationSites.Reveal;
    tarea: Tarea = {
        titulo: ''
    };
    editarDescripcion = false;

    constructor(
        private hostElement: ElementRef,
        private tareasModalService: TareasModalService,
        private tareasService: TareasService
    ) {
        this.tareasModalService.open$.subscribe(
            (data: Tarea) => {
                console.log('ConfirmModal', data);
                this.tarea = data;
                this.reveal.open();
            }
        );
    }

    ngAfterViewInit() {
        this.$elem = $('.reveal',this.hostElement.nativeElement);
        this.reveal = new Foundation.Reveal(this.$elem);
    }

    cerrar() {
        this.reveal.close();
    }

    guardar() {
        this.tareasService.editTarea(this.tarea);
        this.reveal.close();
    }

}
