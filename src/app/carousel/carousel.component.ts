import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @ViewChild('topCarousel') topCarousel: CarouselComponent;
  constructor() { }

  ngOnInit() {
  }

  reestartCarousel($event) {
    this.topCarousel.slideTo(0);
  }

}