import {Component, AfterViewInit} from '@angular/core';
import {NavigationControllerService} from '../../../navigation/navigationController.service';
import * as $ from 'jquery';

@Component({
    selector: '.hamburger',
    templateUrl: './hamburger.component.html',
//    styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements AfterViewInit {
    active: boolean = false;
    
    constructor(private navigationControllerService: NavigationControllerService) {
        this.navigationControllerService.opened$.subscribe(
            opened => {
                this.active = opened;
            }
        );
    }
    
    ngAfterViewInit() {
        setTimeout(() => {
            let top = $('#top-bar').outerHeight();
            this.navigationControllerService.setTop(top+5);
        },500);
    }

    toggle() {
        let top = $('#top-bar').outerHeight();
        this.navigationControllerService.toggle(top + 5);
    }
}
