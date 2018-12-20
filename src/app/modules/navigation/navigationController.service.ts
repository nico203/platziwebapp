import {Injectable} from '@angular/core';
import {ItemNav} from './ItemNav';
import {Subject, Observable} from 'rxjs';

@Injectable()
export class NavigationControllerService {
    private openedSource = new Subject<boolean>();
    private topSource = new Subject<number>();
    private opened: boolean = false;
    private items: ItemNav[];
    
    opened$: Observable<boolean> = this.openedSource.asObservable();
    top$: Observable<number> = this.topSource.asObservable();

    constructor() {}
    
    toggle(top?: number) {
        if(top) {
            this.setTop(top);
        }
        
        this.opened = !this.opened;
        this.openedSource.next(this.opened);
    }
    
    open(top?: number) {
        if(top) {
            this.setTop(top);
        }

        this.opened = true;
        this.openedSource.next(this.opened);
    }
    
    close() {
        this.opened = false;
        this.openedSource.next(this.opened);
    }
    
    setTop(top: number) {
        this.topSource.next(top);
    }
    
    setItems(items: ItemNav[]) {
        this.items = items;
    }
    
    getItems(): ItemNav[] {
        return this.items;
    }
}
