import { Component, OnInit } from '@angular/core';
declare var lightbox: any;

@Component({
  selector: 'app-rede',
  standalone: true,
  imports: [],
  templateUrl: './rede.component.html',
  styles: ``
})
export class RedeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
}
