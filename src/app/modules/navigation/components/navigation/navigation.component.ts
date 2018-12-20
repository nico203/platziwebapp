import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {NavigationControllerService} from '../../navigationController.service';
import {ItemNav} from '../../ItemNav';
import * as $ from 'jquery';
import 'foundation-sites';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit, OnDestroy {

    private items: ItemNav[];
    private $element: JQuery;
    private accordionMenu: FoundationSites.AccordionMenu;
    
    constructor(private navigationControllerService: NavigationControllerService) {}
    
    ngOnInit() {
        this.items = this.navigationControllerService.getItems();
    }

    ngAfterViewInit() {
        this.$element = $('.menu');
        this.accordionMenu = new Foundation.AccordionMenu(this.$element);
    }
    
    ngOnDestroy() {
        if (this.accordionMenu) {
            this.accordionMenu.destroy();
        }
    }
}
