import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
  stagger,
  query,
  state
} from '@angular/animations';

const fadeIn = trigger('fadeIn', [
  transition('void => slide-in-stagger', [
    query(':enter', style({
      transform: 'translateX(-100%)',
      opacity: 0,
      height: 0,
      width: 0
    }), { optional: true }),
    query(':enter', stagger(55, [animate("{{ duration }}ms", keyframes([
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
]);

const rotate = trigger('rotate', [
  state('default', style({ transform: 'translate(0,-50%) rotate(0)' })),
  state('rotated', style({ transform: 'translate(0,-50%) rotate(90deg)' })),
  transition('default <=> rotated', [animate('100ms')])
])

export { fadeIn, fadeOut, rotate };
