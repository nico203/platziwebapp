import {Component, AfterViewInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements AfterViewInit {
    
    private $element: JQuery;
    
    constructor() {}

    ngAfterViewInit() {
        this.$element = $('#top-bar');
        setTimeout(() => {
            let top = this.$element.outerHeight();
            $('.top-bar-container').height(top);
        },500);
    }
}
