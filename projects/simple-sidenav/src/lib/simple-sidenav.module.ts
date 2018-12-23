import { NgModule } from '@angular/core';
import { SimpleSidenavComponent } from './simple-sidenav.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SimpleSidenavComponent],
  imports: [
    CommonModule
  ],
  exports: [SimpleSidenavComponent]
})
export class SimpleSidenavModule { }
