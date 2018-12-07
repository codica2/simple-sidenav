import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'sm-simple-sidenav',
  templateUrl: './simple-sidenav.component.html',
  styleUrls: ['./simple-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('openClose', [
      transition(':enter', [style({ height: '0' }), animate('300ms', style({opacity: '1', height: '*'}))]),
      transition(':leave', [animate('300ms', style({height: '0'}))]),
    ])
  ]
})
export class SimpleSidenavComponent implements OnInit {
  menuItems = [
    { name: 'Item 1', icon: 'https://cdn4.iconfinder.com/data/icons/camping-hand-drawn/40/camping_hand_drawn_icon_-07-512.png', submenu: [{ name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] },
    { name: 'Item 2', icon: 'https://cdn4.iconfinder.com/data/icons/camping-hand-drawn/40/camping_hand_drawn_icon_-07-512.png', submenu: [{ name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] },
    { name: 'Item 3', icon: 'https://cdn4.iconfinder.com/data/icons/camping-hand-drawn/40/camping_hand_drawn_icon_-07-512.png', submenu: [{ name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] },
    { name: 'Item 4', icon: 'https://cdn4.iconfinder.com/data/icons/camping-hand-drawn/40/camping_hand_drawn_icon_-07-512.png', submenu: [{ name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] },
    { name: 'Item 5', icon: 'https://cdn4.iconfinder.com/data/icons/camping-hand-drawn/40/camping_hand_drawn_icon_-07-512.png', submenu: [{ name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] },
    { name: 'Item 6', icon: 'https://cdn4.iconfinder.com/data/icons/camping-hand-drawn/40/camping_hand_drawn_icon_-07-512.png', submenu: [{ name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] },
    { name: 'Item 7', icon: 'https://cdn4.iconfinder.com/data/icons/camping-hand-drawn/40/camping_hand_drawn_icon_-07-512.png', submenu: [{ name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }
  ];

  activeOne: number;

  virtualMenu;
  constructor() { }

  ngOnInit() {
    this.menuItems
  }

  onNavClick(index: number): void {
    this.activeOne === index ? this.activeOne = null : this.activeOne = index
  }
}
