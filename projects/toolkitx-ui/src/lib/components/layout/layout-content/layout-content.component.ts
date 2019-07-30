import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tx-layout-content',
  template: '<ng-content></ng-content>'
})
export class LayoutContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
