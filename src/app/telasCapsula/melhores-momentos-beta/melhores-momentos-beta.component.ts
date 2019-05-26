import { Component, OnInit } from '@angular/core';
declare var $: any;
import * as $ from 'jquery';  


@Component({
  selector: 'app-melhores-momentos-beta',
  templateUrl: './melhores-momentos-beta.component.html',
  styleUrls: ['./melhores-momentos-beta.component.css']
})
export class MelhoresMomentosBetaComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
    });
    
    $('#openBtn').click(function(){
      $('#myModal').modal({show:true})
    });
  }

  close() {
    var instance = M.Modal.getInstance(elem);
    instance.close();
  }
} 

