import {
  Component,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { fadeIn, fadeOut } from './animations/animations';
import { SimpleMenu } from './interfaces/simple-menu';

@Component({
  selector: 'sm-simple-sidenav',
  templateUrl: './simple-sidenav.component.html',
  styleUrls: ['./simple-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeIn, fadeOut]
})
export class SimpleSidenavComponent implements OnChanges {
  @Input() menu: SimpleMenu;
  @Input() show: boolean = true;
  @Output()
  onSidenav: EventEmitter<{
    id: string|number,
    index: number
  }> = new EventEmitter<{
    id: string|number,
    index: number
  }>();

  activeOne: SimpleMenu = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes.show && changes.show.currentValue === false) {
      this.activeOne = {};
    }
  }

  onNavClick({ id, name, icon }: SimpleMenu, index: number): void {
    this.notifyParent({ id, index });
    if (this.activeOne.id === id) {
      this.activeOne = {};
      return;
    };
    this.activeOne = { menu: [], id, name, icon };
    if (this.menu[index].menu) {
      this.menu[index].menu.forEach((item: SimpleMenu, i: number) => {
        setTimeout(() => {
          this.activeOne.menu.push(item);
        }, 100 * i);
      })
    }
  }

  notifyParent(navItem): void {
    this.onSidenav.emit(navItem);
  }
}
