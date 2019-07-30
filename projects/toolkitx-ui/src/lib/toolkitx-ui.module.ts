import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutContentComponent } from './components/layout/layout-content/layout-content.component';
import { LayoutHeaderExtraComponent } from './components/layout/layout-extra/layout-header-extra.component';
import { LayoutFooterComponent } from './components/layout/layout-footer/layout-footer.component';

const COMPONENTS = [
  LayoutComponent,
  LayoutContentComponent,
  LayoutHeaderExtraComponent,
  LayoutFooterComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  exports: [...COMPONENTS]
})
export class ToolkitXUiModule { }
