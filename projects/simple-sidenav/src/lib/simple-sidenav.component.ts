import { Component, Input, ViewEncapsulation } from '@angular/core';
import { fadeIn, fadeOut } from './animations/animations';
import { SimpleMenu } from './interfaces/simple-menu';

@Component({
  selector: 'sm-simple-sidenav',
  templateUrl: './simple-sidenav.component.html',
  styleUrls: ['./simple-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeIn, fadeOut]
})
export class SimpleSidenavComponent {
  @Input() menu: SimpleMenu;
  @Input() show: boolean = true;

  activeOne: SimpleMenu = {};

  onNavClick({ id, name, icon }: SimpleMenu, index: number): void {
    if (this.activeOne.id === id) {
      this.activeOne = {};
      return
    };
    this.activeOne = { id, name, icon, menu: [] };
    if (this.menu[index].menu) {
      this.menu[index].menu.forEach((item: SimpleMenu, i: number) => {
        setTimeout(() => {
          this.activeOne.menu.push(item);
        }, 100 * i);
      })
    }
  }
}
