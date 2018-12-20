import {Injectable, ElementRef} from '@angular/core';
import {Subject, Observable} from 'rxjs';

/**
 * TODO: hacer que el servicio no este disponible en el root y 
 * solo sea aplicable a los componentes CARD y a la directiva que controla las aperturas
 * cardController.directive
 * 
 * HACER DE VUELTA LA DIRECTIVA CARDCONTROLLER QUE ABRA LAS APERTURAS PORQUE EL BOLUDO LA BORRO
 */

@Injectable({
    providedIn: 'root'
})
export class CardService {
    private elemSource = new Subject<ElementRef>();
    private targetSource = new Subject<string>();
    
    elem$: Observable<ElementRef> = this.elemSource.asObservable();
    target$: Observable<string> = this.targetSource.asObservable();
    
    constructor() {}
    
    setCurrentElem(elem: ElementRef) {
        this.elemSource.next(elem);
    }
    
    openNext(target: string) {
        this.targetSource.next(target);
    }
}
