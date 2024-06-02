import { Component, NgModule, ChangeDetectorRef } from '@angular/core';
import { InViewportModule } from 'ng-in-viewport';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule, InViewportModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css',
  animations: [
    trigger('pullIn', [
      state('rightPull', style({ opacity: '0%', transform: 'translateX(100px)' })),
      state('leftPull', style({ opacity: '0%', transform: 'translateX(-100px)' })),
      state('leftResting', style({ opacity: '100%', transform: 'translateX(0px)' })),
      state('rightResting', style({ opacity: '100%', transform: 'translateX(0px)' })),

      transition('rightPull <=> rightResting', [animate('1s')]),
      transition('leftPull <=> leftResting', [animate('1s')]),
    ]),
   ]})
    

export class BioComponent {
  onBioSection = false;
  constructor(private cdr: ChangeDetectorRef) {}

  toggleOnBioSection(){
    this.onBioSection = !this.onBioSection;
  }
    
  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
      this.onBioSection = visible;
      //modifying binding in onIntersection() doesn't trigger detectChanges so do so manually
      this.cdr.detectChanges();
  }

}
