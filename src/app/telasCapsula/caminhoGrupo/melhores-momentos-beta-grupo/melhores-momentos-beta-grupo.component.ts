import { Component, OnInit } from '@angular/core';
declare var $: any;
import * as $ from 'jquery';  



@Component({
  selector: 'app-melhores-momentos-beta-grupo',
  templateUrl: './melhores-momentos-beta-grupo.component.html',
  styleUrls: ['./melhores-momentos-beta-grupo.component.css']
})
export class MelhoresMomentosBetaGrupoComponent implements OnInit {
  
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

