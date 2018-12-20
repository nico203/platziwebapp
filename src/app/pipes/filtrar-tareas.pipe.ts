import { Pipe, PipeTransform } from '@angular/core';
import { Tarea } from '../models/tarea';

@Pipe({
    name: 'filtrarTareas'
})
export class FiltrarTareasPipe implements PipeTransform {

    transform(value: Tarea[], args?: string): any {
        if (!value) {
            return;
        }
        if (!args) {
            return value;
        }
        args = args.toLowerCase();

        //Si el filtro es todas, retornamos todas las tareas
        if (args === 'todas') {
            return value;
        }

        //si el filtro es realizadas, se marca la bandera en true
        const tareas_hechas = (args === 'realizadas');

        return value.filter((item: Tarea) => {
            return item.hecho === tareas_hechas;
        });
    }

}
