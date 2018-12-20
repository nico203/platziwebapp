import {Component, Input} from '@angular/core';
import {ItemNav} from '../../ItemNav';

@Component({
    selector: '.navigation-item',
    templateUrl: './navigation-item.component.html',
    styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent{

    @Input() items: ItemNav[];
    
    constructor() {}
}
