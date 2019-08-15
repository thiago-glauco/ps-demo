import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.css']
})
export class GenericCardComponent implements OnInit {

  cardData = {
    title: "Empoderar",
    subtitle: "",
    text: "A notícia do diagnostico do filho afeta totalmente o lado psicológico da mãe. Ela entra em luto, tem dificuldade de falar sobre o assunto, não quer mostrar o filho para as pessoas. Afasta-se dos amigos, tudo isso pode levar a depressão, a síndrome do pânico e diversas outras doenças. Precisamos ajudar essas mães. Mães fortalecidas emocionalmente criam filhos fortes e felizes. ",
    imgSrc: "http://tnh.health/blog/wp-content/uploads/2017/03/S%C3%ADndrome-de-Down.png"
  }
  constructor() { }

  ngOnInit() {
  }

}