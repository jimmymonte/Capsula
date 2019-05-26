import { Component, OnInit } from '@angular/core';
declare var $: any;
import * as $ from 'jquery';  

@Component({
  selector: 'app-melhores-momentos',
  templateUrl: './melhores-momentos.component.html',
  styleUrls: ['./melhores-momentos.component.css']
})
export class MelhoresMomentosComponent implements OnInit {

  // foto: string;
  // idDiv: string;

  constructor() { }

  ngOnInit(){

  }

  openDialog1() {
    $('#big1').click(function(){
      $('.modal').modal();
    });

    $("img.thumbnail").click(function(ev){   
    $("#replaceMeBig1").attr("src", $(ev.target).attr("src"));
    });
  }

  openDialog2 () {
    $('#big2').click(function(){
      $('.modal').modal();
    });

    $("img.thumbnail").click(function(ev){   
    $("#replaceMeBig2").attr("src", $(ev.target).attr("src"));
    });
  }

  openDialog3 () {
    $('#big3').click(function(){
      $('.modal').modal();
    });

    $("img.thumbnail").click(function(ev){   
    $("#replaceMeBig3").attr("src", $(ev.target).attr("src"));
    });
  }

  openDialog4 () {
    $('#big4').click(function(){
      $('.modal').modal();
    });

    $("img.thumbnail").click(function(ev){   
    $("#replaceMeBig4").attr("src", $(ev.target).attr("src"));
    });
  }

  openDialog5 () {
    $('#big5').click(function(){
      $('.modal').modal();
    });

    $("img.thumbnail").click(function(ev){   
    $("#replaceMeBig5").attr("src", $(ev.target).attr("src"));
    });
  }

  openDialog6 () {
    $('#big6').click(function(){
      $('.modal').modal();
    });

    $("img.thumbnail").click(function(ev){   
    $("#replaceMeBig6").attr("src", $(ev.target).attr("src"));
    });
  }

  openDialog7 () {
    $('#big7').click(function(){
      $('.modal').modal();
    });

    $("img.thumbnail").click(function(ev){   
    $("#replaceMeBig7").attr("src", $(ev.target).attr("src"));
    });
  }

}


  // selecionarfoto(f: string) {
  //   $(`#${this.idDiv}`).attr('src', f);
  // }



  // selecionadiv(id: string) {

  //   this.idDiv = id;
  // }

  
    // $('#big3').click(function(){
    //   $('.modal').modal();
    // });

    // $('#big4').click(function(){
    //   $('.modal').modal();
    // });

    // $('#big5').click(function(){
    //   $('.modal').modal();
    // });

    // $('#big6').click(function(){
    //  $('.modal').modal();
    // });

    // $('#big7').click(function(){
    //  $('.modal').modal();
    //});
  
    // $("img.thumbnail").click(function(ev){
    //   $(".big>img").attr("src", $(ev.target).attr("src"));
    // });  

  // trocaFoto2 (id:string) {

    // $('#big2').click(function(){
    //  $('.modal').modal();
    // });

    // $("img.thumbnail").click(function(ev){
    
    // $(id).attr("src", $(ev.target).attr("src"));

    // });
  

    // trocaFoto3 (id:string) {


    //  $('#big3').click(function(){
    //     $('.modal').modal();
    //   });


    //  $("img.thumbnail").click(function(ev){
    //   $(id).attr("src", $(ev.target).attr("src"));

    // });
    // }
    // }  // console.log($(ev.target).attr("src"));      
      


      // $("div.big").click((ev) => {
    //   console.log(53);
    //   $(".thumbnails").toggle("slow");
  
  
      // elems=$(".modal") // or id
      // elems[0].M_Modal.open()
      // elems[0].M_Modal.close()
    


  


