import { Component, OnInit } from '@angular/core';

declare var lightbox: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
  }

}
