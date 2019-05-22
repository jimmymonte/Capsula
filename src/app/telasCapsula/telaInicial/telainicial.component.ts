import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telainicial',
  templateUrl: './telainicial.component.html',
  styleUrls: ['./telainicial.component.css']
})
export class TelainicialComponent implements OnInit {
  aparece: any = true;
  constructor() { }

  ngOnInit() {

  }
  changeIcon(){
    if(this.aparece == true)
      this.aparece = false;
    else{
      this.aparece = true;
    }
  }
}
