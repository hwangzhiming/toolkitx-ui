import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tx-layout-header-extra',
    template: '<ng-content></ng-content>',
    styleUrls: ['./layout-extra.component.scss']
})
export class LayoutHeaderExtraComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
