import {Component, OnInit, Input, HostListener, ElementRef} from '@angular/core';
import {CardService} from '../../card-service.service';


/**
 * TODO: 
 * ver la posibilidad de agregar un servicio de configuracion para dejar por
 * defecto, si el closed elimina el elemento del DOM usando ngIf o si solo lo
 * esconde usando el hidden (css)
 * 
 * REFACTOR:
 * Cambiar el input titulo, que no sea title, asi no usa el default title y el 
 * componente no tiene el label cada vez que se deja el mouse quieto sobre una 
 * tarjeta
 * 
 * BUG: 
 * Problema con el overflow en los select
 */

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
//    providers: [
//        CardService
//    ]
})
export class CardComponent implements OnInit {
    
    @Input() title: string;
    @Input() cardId: string;
    @Input() closeable: boolean = false;
    @Input() minimizable: boolean = false;
    
    hide: boolean = true;
    closed: boolean = false;
    minimized: boolean = false;

    constructor(private elem: ElementRef,
        private cardService: CardService) {
        this.cardService.elem$.subscribe(
            elem => {
                this.checkMouse(elem);
            }
        );
        this.cardService.target$.subscribe(
            target => {
                this.checkOpen(target)
            }
        );
    }

    ngOnInit() {
        console.log(this);
        if (this.closeable) {
            this.closed = true;
        }
        console.log(this);
    }
    
    close() {
        this.closed = true;
    }
    
    toggle() {
        if (!this.minimizable) return;
        this.minimized = !this.minimized;
    }
    
    checkOpen(target: string) {
        if (target === this.cardId) {
            this.closed = false;
        }
    }
    
    checkMouse(elem: ElementRef) {
        this.hide = (this.elem != elem);
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.cardService.setCurrentElem(this.elem);
        this.hide = false;
    }
}
