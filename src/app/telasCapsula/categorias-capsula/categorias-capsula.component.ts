import { Component, OnInit } from '@angular/core';
declare var $: any;
import * as $ from 'jquery';  


@Component({
  selector: 'app-categorias-capsula',
  templateUrl: './categorias-capsula.component.html',
  styleUrls: ['./categorias-capsula.component.css']
})
export class CategoriasCapsulaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
    });
  }

}
