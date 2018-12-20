import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todas-tareas',
    templateUrl: './todas-tareas.component.html',
    styleUrls: ['./todas-tareas.component.scss'],
    host: {
        class: 'root-component'
    }
})
export class TodasTareasComponent implements OnInit {

    estadoTarea: string = 'todas';

    constructor() { }

    ngOnInit() {
    }
}
