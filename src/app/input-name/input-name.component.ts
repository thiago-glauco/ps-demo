import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.css']
})
export class InputNameComponent implements OnInit {

  inputData = {
    name: "Hello",
    required: true,
    placeHolder: "teste",
    matIconName: "sentiment_very_satisfied",
    matIconPos: "",
  }

  constructor() { }

  ngOnInit() {
  }

}