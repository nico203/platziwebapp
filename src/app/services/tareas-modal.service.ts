import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
    providedIn: 'root'
})
export class TareasModalService {
    private openSource = new Subject<Tarea>();
    
    open$: Observable<Tarea> = this.openSource.asObservable();

    constructor() {}
    
    open(tarea: Tarea) {
        this.openSource.next(tarea);
    }
}
