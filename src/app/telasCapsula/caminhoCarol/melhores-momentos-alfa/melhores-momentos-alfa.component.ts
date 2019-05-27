import { Component, OnInit } from '@angular/core';
declare var $: any;
import * as $ from 'jquery';  

@Component({
  selector: 'app-melhores-momentos-alfa',
  templateUrl: './melhores-momentos-alfa.component.html',
  styleUrls: ['./melhores-momentos-alfa.component.css']
})
export class MelhoresMomentosAlfaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("div#receiveFile").dropzone({ url: "/file/post" });

  }

}
