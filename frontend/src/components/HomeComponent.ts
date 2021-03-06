import {ViewEncapsulation, Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {HogeComponent} from './HogeComponent';

declare var jQuery:any;

interface User {
    name:string;
    age:number;
}

@Component({
    templateUrl: 'templates/home/index.html.js',
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class HomeComponent {
    private items:Array<number>;
    private users:Array<User>;

    constructor() {
        console.log('HomeComponent.ts');
        this.items = [1, 2, 3];
        this.users = [
            {name: 'Bob', age: 1},
            {name: 'Alice', age: 12}
        ];
    }

    alert() {
        alert("test alert");
    }

    modal() {
        jQuery('#myModalJs').modal('show');
    }
}
