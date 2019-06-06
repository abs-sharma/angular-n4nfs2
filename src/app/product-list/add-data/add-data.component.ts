import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-data',
  template:`<div>{{SerialId}}</div>`,
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  
  SerialId=" ";
  msg = "";
      nCnt: number = 0;
      clickMe() {
      this.nCnt = this.nCnt + 1;
      this.msg = "Clicked: " + this.nCnt;
  constructor()
  { }
  
  ngOnInit();
  

}
}