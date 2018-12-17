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
import { SimpleAnimation } from './interfaces/simple-animation';

@Component({
  selector: 'sm-simple-sidenav',
  templateUrl: './simple-sidenav.component.html',
  styleUrls: ['./simple-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeIn, fadeOut]
})
export class SimpleSidenavComponent implements OnChanges {
  @Input() menu: SimpleMenu[] = [];
  @Input() show: boolean = true;
  @Input() animation: {in: SimpleAnimation, out: SimpleAnimation};
  @Input() animate: boolean = false;
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
    this.onSidenav.emit({ id, index });
    if (this.activeOne.id === id) {
      this.activeOne = {};
      return;
    };
    this.activeOne = { id, name, icon };
    if (this.menu[index].menu) { this.activeOne.menu = this.menu[index].menu };
  }
}
