import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-line',
  templateUrl: './card-line.component.html',
  styleUrls: ['./card-line.component.css']
})
export class CardLineComponent implements OnInit {
cardsObject = [
  {title: "Empoderar",
    subtitle: "",
    text: "A notícia do diagnostico do filho afeta totalmente o lado psicológico da mãe. Ela entra em luto, tem dificuldade de falar sobre o assunto, não quer mostrar o filho para as pessoas. Afasta-se dos amigos, tudo isso pode levar a depressão, a síndrome do pânico e diversas outras doenças. Precisamos ajudar essas mães. Mães fortalecidas emocionalmente criam filhos fortes e felizes. ",
    imgSrc: "http://tnh.health/blog/wp-content/uploads/2017/03/S%C3%ADndrome-de-Down.png"},

    {title: "Incluir",
    subtitle: "",
    text: "Nossa busca é a valorização, respeito e igualdade. Queremos que os deficientes sejam inseridos e socializem em diferentes contextos, que sejam tratados com respeito e que suas limitações não sejam impedimento para a participação, o crescimento e seu desenvolvimento.",
    imgSrc: "http://tnh.health/blog/wp-content/uploads/2017/03/S%C3%ADndrome-de-Down.png"},
    {title: "Cuidar",
    subtitle: "",
    text: "A descoberta da deficiência é momento marcado por muitas dúvidas, incerteza. Dar às mães a possibilidade de fazerem contato com outras  que lidam com as mesmas questões, torna-se uma rica troca de informações e uma rede de apoio que pode mostrar à pessoa novas formas de enfrentar os desafio.",
    imgSrc: "http://tnh.health/blog/wp-content/uploads/2017/03/S%C3%ADndrome-de-Down.png"}
]

  constructor() { }

  ngOnInit() {
  }

}