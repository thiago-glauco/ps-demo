import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.css']
})
export class GenericCardComponent implements OnInit {

  @Input() cardData;
  constructor() { }

  ngOnInit() {
  }

}