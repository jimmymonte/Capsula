import { Component, OnInit } from '@angular/core';
declare var $: any;
import * as $ from 'jquery';  


@Component({
  selector: 'app-categorias-capsula',
  templateUrl: './categorias-capsula.component.html',
  styleUrls: ['./categorias-capsula.component.css']
})
export class CategoriasCapsulaComponent implements OnInit {
  perguntas: any = ["Qual seu filho favorito?", "Qual sua esposa favorita?","Qual seu pet favorito?"];
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
