import { Component, OnInit } from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
    selector: 'app-agregar-tarea',
    templateUrl: './agregar-tarea.component.html',
    styleUrls: ['./agregar-tarea.component.scss']
})
export class AgregarTareaComponent implements OnInit {

    titulo: string;

    constructor(private tareasService: TareasService) { }

    ngOnInit() {
    }

    guardarTarea() {
        //validamos que el titulo sea valido
        //para esto debe tener mas de 3 caracteres sin contar los espacios

        //eliminamos el \n titulo generado al dar enter
        const titulo = this.titulo.replace(/\n/g, '');

        if(titulo && titulo.replace(/\s/g, '').length > 3) {
            this.tareasService.addTarea({
                titulo: titulo
            });
            this.titulo = '';
        }
    }
}
