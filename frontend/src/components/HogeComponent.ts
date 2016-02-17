import {ViewEncapsulation, Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './HomeComponent';

@Component({
    templateUrl: 'templates/hoge/index.html.js',
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class HogeComponent {
    constructor() {
        console.log('HogeComponent.ts')
    }
}
