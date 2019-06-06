import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-data',
  template:`<input required minlength="5" maxlength="10" pattern="010" [(ngModel)]="SerialId" #SerialId=ngModel class="form-control">
    <div class="alert alert-danger" *ngIf="!Serialid.valid&&Serialid.touched">`,
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  
  SerialId=" ";
  msg = "";
      nCnt: number = 0;
      clickMe() {
      this.nCnt = this.nCnt + 1;
      this.msg = "Clicked: " + this.nCnt;

  
  ngOnInit(){};
  

}
}