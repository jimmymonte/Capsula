import { Component, OnInit } from '@angular/core';
declare var $: any;
import * as $ from 'jquery';  

@Component({
  selector: 'app-melhores-momentos-alfa-grupo',
  templateUrl: './melhores-momentos-alfa-grupo.component.html',
  styleUrls: ['./melhores-momentos-alfa-grupo.component.css']
})
export class MelhoresMomentosAlfaGrupoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("div#receiveFile").dropzone({ url: "/file/post" });

  }

}
