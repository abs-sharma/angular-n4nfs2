import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-data',
  template:``,
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  
  SerialId=" ";
  
  constructor(public router: Router) { }

  ngOnInit() {
  }

}