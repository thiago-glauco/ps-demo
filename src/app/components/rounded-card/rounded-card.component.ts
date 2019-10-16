import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rounded-card',
  templateUrl: './rounded-card.component.html',
  styleUrls: ['./rounded-card.component.css']
})
export class RoundedCardComponent implements OnInit {
  
  @Input() texto: string;
  @Input() img_url: string;

  constructor() { }

  ngOnInit() {
  }

}