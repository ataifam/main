import { Component, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css',
  animations: [
    trigger('pullIn', [
      state('right', style({ opacity: '0%', transform: 'translateX(100vw)' })),
      state('left', style({ opacity: '0%', transform: 'translateX(-100vw)' })),
      state('leftResting', style({ opacity: '100%', transform: 'translateX(0px)' })),
      state('rightResting', style({ opacity: '100%', transform: 'translateX(0px)' })),

      transition('right <=> rightResting', [animate('2s')]),
      transition('left <=> leftResting', [animate('2s')]),
    ]),
    trigger('bounce', [
      state('bounceDown', style({ transform: 'translateY(0px)' })),
      state('bounceUp', style({ transform: 'translateY(-10px)' })),
      
      transition('bounceDown <=> bounceUp', [animate('2s')]),
   ]),
  ]
})

export class BioComponent {
  onBioSection = true;
  isBouncing = false;

  toggleOnBioSection(){
    this.onBioSection = !this.onBioSection;
  }

  toggleBounce(){
    this.isBouncing = !this.isBouncing;
  }
}
