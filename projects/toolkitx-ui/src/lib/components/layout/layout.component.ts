import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'tx-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    exportAs: 'LayoutComponent'
})
export class LayoutComponent implements OnInit {
    @Input() txIcon: string;
    @Input() txTitle: string;
    @Input() txTheme: 'dark' | 'light' = 'dark';
    constructor() {
    }

    ngOnInit() {
    }

}
