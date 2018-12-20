import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';


const URI = 'platziwebapp_tareas';

@Injectable({
    providedIn: 'root'
})
export class TareasService {
    tareas: Tarea[] = [];

    constructor() { }

    getTareas(): Tarea[] {
        this.tareas = this.getDataLocalStorage() || [];
        return this.tareas;
    }

    addTarea(tarea: Tarea) {
        tarea.uid = Date.now();
        tarea.hecho = false;
        this.tareas.push(tarea);

        this.saveDataLocalStorage(this.tareas);
    }

    editTarea(tarea: Tarea) {
        const index = this.tareas.map((e) => e.uid).indexOf(tarea.uid);

        if (index !== -1) {
            this.tareas[index] = tarea;
            this.saveDataLocalStorage(this.tareas);
        }
    }

    deleteTarea(tarea: Tarea) {
        const index = this.tareas.map((e) => e.uid).indexOf(tarea.uid);

        if (index !== -1) {
            this.tareas.splice(index, 1);
            this.saveDataLocalStorage(this.tareas);
        }
    }

    private getDataLocalStorage() {
        const jsonString = window.localStorage.getItem(URI);
        return JSON.parse(jsonString);
    }

    private saveDataLocalStorage(data: any) {
        const jsonString = JSON.stringify(data);
        window.localStorage.setItem(URI, jsonString);
    }
}
