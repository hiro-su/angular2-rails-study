import {ViewEncapsulation, Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {HogeComponent} from './HogeComponent';

@Component({
    templateUrl: 'templates/home/index.html.js',
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class HomeComponent {
    private items;
    private users;

    constructor() {
        console.log('HomeComponent.ts');
        this.items = [1, 2, 3];
        this.users = [{ name: 'Bob', age: 1 }, { name: 'Alice', age: 12 }]
    }

    static alert() {
        alert("test alert");
    }
}
