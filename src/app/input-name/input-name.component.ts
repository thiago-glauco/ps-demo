import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.css']
})
export class InputNameComponent implements OnInit {

  inputData = {
    label: "Testando", //label
    name: "Hello", // name do input
    required: true, // validação
    placeHolder: "teste", //placeholder
    matIconName: "sentiment_very_satisfied", //tem icone?
    matIconPos: "prefix", //posição do icone: 
  }

  constructor() { }

  ngOnInit() {
  }

}