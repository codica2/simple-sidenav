import {
  Component,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { fadeIn, fadeOut, rotate } from './animations/animations';
import { SimpleMenu } from './interfaces/simple-menu';
import { SimpleAnimation } from './interfaces/simple-animation';

@Component({
  selector: 'sm-simple-sidenav',
  templateUrl: './simple-sidenav.component.html',
  styleUrls: ['./simple-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeIn, fadeOut, rotate]
})
export class SimpleSidenavComponent implements OnChanges {
  @Input() menu: SimpleMenu[] = [];
  @Input() show: boolean = true;
  @Input() animation: SimpleAnimation;
  @Input() animate: boolean = false;
  @Input() withArrow: boolean = true;
  @Input() activeID;
  @Output()
  onSidenav: EventEmitter<{
    id: string|number,
    name: string,
    icon: string,
    index: number
  }> = new EventEmitter<{
    id: string|number,
    name: string,
    icon: string,
    index: number
  }>();

  activeOne: SimpleMenu = {};

  ngOnChanges(changes: SimpleChanges): void {
    this.activeOne = {};
    if (changes.activeID && changes.activeID.currentValue) {
      this.activeID = changes.activeID.currentValue;
      this.activeID && this.menu && this.findActive();
    }
  }

  onNavClick({ id, name, icon }: SimpleMenu, index: number): void {
    if (this.activeOne.id === id && this.activeOne.menu) {
      this.activeOne = {};
      this.onSidenav.emit(null);
      return;
    };
    this.onSidenav.emit({ id, name, icon, index });
    this.activeOne = { id, name, icon };
    if (this.menu[index].menu) { this.activeOne.menu = this.menu[index].menu };
  }

  findActive(): void {
    this.menu.forEach((item: SimpleMenu) => {
      if (item.id === this.activeID || this.hasActive(item.menu)) {
        this.activeOne = item;
        return;
      }
    });
  }

  hasActive(menu: SimpleMenu[]): boolean {
    return menu && menu.some(item => item.id === this.activeID || this.hasActive(item.menu));
  }
}
