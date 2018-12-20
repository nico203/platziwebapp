import {Route} from '@angular/router';

export interface ItemNav {
    name: string;
    route?: Route
    items?: ItemNav[];
}
