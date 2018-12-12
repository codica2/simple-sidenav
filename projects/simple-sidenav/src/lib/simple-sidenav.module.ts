import { NgModule } from '@angular/core';
import { SimpleSidenavComponent } from './simple-sidenav.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SimpleSidenavComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [SimpleSidenavComponent]
})
export class SimpleSidenavModule { }
