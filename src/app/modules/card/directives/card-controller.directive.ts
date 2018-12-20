import {Directive, Input, HostListener} from '@angular/core';
import {CardService} from '../card-service.service';

@Directive({
    selector: '[cardController]'
})
export class CardControllerDirective {

    @Input('cardController') cardId: string;

    constructor(private cardService: CardService) {}
    
    @HostListener('click') onCLick() {
        if (!this.cardId) return;
        this.cardService.openNext(this.cardId);
    }

}
