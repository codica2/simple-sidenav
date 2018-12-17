import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
  stagger,
  query
} from '@angular/animations';

const fadeIn = trigger('fadeIn', [
  transition('void => slide-in-stagger', [
    query('.simple-sidenav__item .simple-sidenav__item:enter', style({
      transform: 'translateX(-100%)',
      opacity: 0,
      height: 0,
      width: 0
    }), { optional: true }),
    query('.simple-sidenav__item .simple-sidenav__item:enter', stagger(55, [animate("{{ duration }}ms", keyframes([
      style({ transform: 'translateX(-100%)', opacity: 0, height: 0, width: 0 }),
      style({ transform: 'translateX(5%)', opacity: 0.5, height: '*' }),
      style({ transform: 'translateX(-3%)', opacity: 0.6, height: '*' }),
      style({ transform: 'translateX(2%)', opacity: 0.7, height: '*', width: '100%' }),
      style({ transform: 'translateX(0)', opacity: 1, height: '*', width: '100%' })
    ]))]), { optional: true })
  ], { params: { duration: 500 } }),
  transition('* => slide-in', [
    query(':self', style({ height: 0 }), { optional: true }),
    query(':self', animate("{{ duration }}ms", style({ height: '*' })), { optional: true })
  ], { params: { duration: 300 } })
]);

const fadeOut = trigger('close', [
  transition('slide-out => void', [animate("{{ duration }}ms", style({ height: 0 }))], { params: { duration: 200 } })
])

export { fadeIn, fadeOut };
