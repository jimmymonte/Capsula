import { Component, OnInit } from '@angular/core';
declare var $: any;
import * as $ from 'jquery';  


@Component({
  selector: 'app-categorias-capsula',
  templateUrl: './categorias-capsula.component.html',
  styleUrls: ['./categorias-capsula.component.css']
})
export class CategoriasCapsulaComponent implements OnInit {
  perguntas: any = ["Como seus pais se conheceram?",
   "Você se lembra de alguma briga que tenha te marcado? <br> Como foi?",
   "Qual foi a maiot lição da sua vida?",
   "Qual foi sua maior conquista na vida?",
   "Qual foi sua maior perda na vida?",
   "Qual foi o primeiro presente que você comprou com seu próprio dinheiro? Quem foi presenteado?",
   "Qual foi o lugar mais bonito que você já conheceu? Pode ser uma cidade ou um parque, por exemplo",
   "O que você faz de melhor na vida? Quando descobriu isso?",
   "Você já teve um momento de grande generosidade em que ajudou alguém que precisava?",
   "Você teve animais de estimação? Quais foram e em que época?",
   "Quais são os cinco objetos que você mais adora? Quais experiências marcantes você teve com eles?",
   "O que você mais gosta de comer? Qual foi a última vez que você comeu esse prato?",
   "Quais foram os filmes mais marcantes da sua vida? Quando você os viu pela primeira vez?",
   "Você admira algum artista ou personalidade? Em que fase da vida você mais acompanhou a carreira dessa pessoa?",
   "Qual sua música favorita? O que vem à sua memória quando se lembra dela?",
   "Você considera ter vivido algum milagre? E algum evento espiritual?",
   "Você já viveu uma grande aventura? Qual?",
   "Qual foi a primeira viagem que você fez sem seus pais?",
   "Que pessoa teve mais influência sobre a sua personalidade e em que fase da vida?",
   "Você já conheceu alguém famoso? Quando e como foi esse encontro?",
   "Você praticou esporte ao longo da vida? Quais foram e em que momento?",
   "Quem são seus grandes amigos? Quando os conheceu?",
   "Você por algum time de futebol ou de outro esporte? Qual campeonato mais emcionante de que você mais lembra?",
   "Você sabe cozinhar? Qual foi a sua primeira experiência culinária?",
   "Você teve um professor inesquecível? Em que fase da sua vida? Por que você gostava dele?",
   "Você já se apaixonou? Quando e como foi a sua primeira paixão?",
   "Qual foi o seu primeiro trabalho? Quantos ans você tinha?",
   "Qual foi a lição mais importante que você aprendeu com o seu pai?",
   "Qual foi a lição mais importante que você aprendeu com o seu mãe?",
   "Você considera que cometeu algum grande erro na vida? Quando e qual?",
   "Qual é a memória mais marcante que você tem do seu pai? E da sua mãe?",
   "Como seus pais se conhecera?"
     ];
  daVez: any = 0;
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
    });
  }
  randomQuestion(){
    if(this.perguntas.length == 0){
      this.perguntas[0] = "Acabou rapaz";
      this.daVez = 0;
    }

    this.daVez = Math.floor((Math.random() * this.perguntas.length) + 1) - 1; 

  }

}
