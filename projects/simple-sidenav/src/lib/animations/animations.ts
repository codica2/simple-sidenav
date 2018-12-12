import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

const fadeIn = trigger('fadeIn', [
  transition(':enter', [animate('500ms', keyframes([
    style({ transform: 'translateX(-100%)', opacity: 0, height: 0, width: 0 }),
    style({ transform: 'translateX(5%)', opacity: 0.5, height: '*' }),
    style({ transform: 'translateX(-3%)', opacity: 0.6, height: '*' }),
    style({ transform: 'translateX(2%)', opacity: 0.7, height: '*', width: '100%' }),
    style({ transform: 'translateX(0)', opacity: 1, height: '*', width: '100%' })
  ]))])
]);

const fadeOut = trigger('close', [
  transition(':leave', [animate('100ms', style({height: 0}))])
])

export { fadeIn, fadeOut };
