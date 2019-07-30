import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'tx-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    exportAs: 'LayoutComponent'
})
export class LayoutComponent implements OnInit {
    @Input() icon: string;
    @Input() title: string;
    constructor() {
    }

    ngOnInit() {
    }

}
