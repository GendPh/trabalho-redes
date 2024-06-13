import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styles: ``
})
export class NavBarComponent {
  @ViewChild('navToggleButton') navToggleButton: ElementRef | undefined;
  @ViewChild('mobileNavMenu') navMenu: ElementRef | undefined;
  @ViewChild('mobileNavBg') mobileNavBg: ElementRef | undefined;

  ToggleMobileNav() {
    if (this.navToggleButton && this.navMenu && this.mobileNavBg) {
      if (this.navToggleButton.nativeElement.classList.contains('close')) {
        this.navToggleButton.nativeElement.classList.remove('close');
        this.navMenu.nativeElement.classList.remove('open');
        this.mobileNavBg.nativeElement.classList.replace('open', 'close');
      } else {
        this.navToggleButton.nativeElement.classList.add('close');
        this.navMenu.nativeElement.classList.add('open');
        this.mobileNavBg.nativeElement.classList.replace('close', 'open');
      }
    }
  }
  CloseMobileNav() {
    if (this.navToggleButton && this.navMenu && this.mobileNavBg) {
      this.navToggleButton.nativeElement.classList.remove('close');
      this.navMenu.nativeElement.classList.remove('open');
      this.mobileNavBg.nativeElement.classList.replace('open', 'close');
    }
  }
}
