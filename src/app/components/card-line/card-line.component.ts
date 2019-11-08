import { Component, OnInit, Input } from '@angular/core';
import {Card} from "../shared/card";
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { CardsHomeService } from '../../services/cards-home.service';

@Component({
  selector: 'app-card-line',
  templateUrl: './card-line.component.html',
  styleUrls: ['./card-line.component.css']
})
export class CardLineComponent implements OnInit {
  cards: Card[];
  @Input() path: string;

  constructor(
    private cardsHomeService: CardsHomeService
  ) { }

  ngOnInit() {
    this.cardsHomeService.getAll(this.path)
    .subscribe({
      error: error => console.log(error),
      next: cards => {
        this.cards = cards
        console.dir(this.cards)}
    });
  }

}