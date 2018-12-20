import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NavigationControllerService } from '../../navigationController.service';
import * as $ from 'jquery';
import 'foundation-sites';

@Component({
    selector: 'navigation-container',
    templateUrl: './navigation-container.component.html',
    styleUrls: ['./navigation-container.component.scss'],
})
export class NavigationContainerComponent implements AfterViewInit, OnDestroy {
    private offCanvas: FoundationSites.OffCanvas;
    private $element: JQuery;

    top: number;

    constructor(private navigationControllerService: NavigationControllerService) {
        this.navigationControllerService.opened$.subscribe(
            opened => {
                this.toggle(opened);
            }
        );
        this.navigationControllerService.top$.subscribe(
            top => {
                this.top = top;
            }
        );
    }

    ngOnDestroy() {
        if (this.offCanvas) {
            this.offCanvas.destroy();
        }
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.offCanvas = new Foundation.OffCanvas(this.$element, {
                closeOnClick: true
            });
            this.$element.on('closed.zf.offcanvas', (e): void => {
                this.navigationControllerService.close();
            });
        }, 500);
        this.$element = $('#offCanvas');
    }

    toggle(val: boolean) {
        val ? this.open() : this.close();
    }

    open() {
        this.offCanvas.open(null, this.$element);
    }

    close() {
        this.offCanvas.close(() => {
            this.navigationControllerService.close();
        });
    }
}
