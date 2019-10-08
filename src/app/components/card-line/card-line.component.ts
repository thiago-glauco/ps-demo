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
    imgSrc: "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},

    {title: "Incluir",
    subtitle: "",
    text: "Nossa busca é a valorização, respeito e igualdade. Queremos que os deficientes sejam inseridos e socializem em diferentes contextos, que sejam tratados com respeito e que suas limitações não sejam impedimento para a participação, o crescimento e seu desenvolvimento.",
    imgSrc: "https://images.unsplash.com/photo-1478061653917-455ba7f4a541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {title: "Cuidar",
    subtitle: "",
    text: "A descoberta da deficiência é momento marcado por muitas dúvidas, incerteza. Dar às mães a possibilidade de fazerem contato com outras  que lidam com as mesmas questões, torna-se uma rica troca de informações e uma rede de apoio que pode mostrar à pessoa novas formas de enfrentar os desafio.",
    imgSrc: "https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
]

  constructor() { }

  ngOnInit() {
  }

}