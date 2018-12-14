import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-sidenav-app';
  menu = [
    { id: '1', name: 'Item 1', icon: 'https://cdn4.iconfinder.com/data/icons/camping-hand-drawn/40/camping_hand_drawn_icon_-07-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] } ] },
    { id: '2', name: 'Item 2', icon: 'https://cdn4.iconfinder.com/data/icons/camping-hand-drawn/40/camping_hand_drawn_icon_-07-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] } ] },
    { id: '3', name: 'Item 3', icon: 'https://cdn4.iconfinder.com/data/icons/camping-hand-drawn/40/camping_hand_drawn_icon_-07-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] } ] },
    { id: '4', name: 'Item 4', icon: 'https://cdn4.iconfinder.com/data/icons/camping-hand-drawn/40/camping_hand_drawn_icon_-07-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] } ] },
    { id: '5', name: 'Item 5', icon: 'https://cdn4.iconfinder.com/data/icons/camping-hand-drawn/40/camping_hand_drawn_icon_-07-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] } ] },
    { id: '6', name: 'Item 6', icon: 'https://cdn4.iconfinder.com/data/icons/camping-hand-drawn/40/camping_hand_drawn_icon_-07-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] } ] },
    { id: '7', name: 'Item 7', icon: 'https://cdn4.iconfinder.com/data/icons/camping-hand-drawn/40/camping_hand_drawn_icon_-07-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png', menu: [{ id: '1', name: 'Sub item 1', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '2', name: 'Sub item 2', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' }, { id: '3', name: 'Sub item 3', icon: 'https://cdn3.iconfinder.com/data/icons/other-icons/48/bike-512.png' } ] } ] },
  ]

  onSidenavClick(item) {
    console.log(item)
  }
}
