import { Component, OnInit } from '@angular/core';
import {Slider} from "../shared/slider";
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { CarouselHomeService } from '../../services/carousel-home.service';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.css']
})
export class CarouselHomeComponent implements OnInit {

  slides: Slider[];

  constructor(
    private carouselHomeService: CarouselHomeService;
  ) { }

  ngOnInit() {
    this.carouselHomeService.getActiveSlides()
    .subscribe({
      error: error => console.log(error),
      next: list => this.slides = list
    })
  }

}