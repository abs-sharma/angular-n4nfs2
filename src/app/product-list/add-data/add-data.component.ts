import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  
  SerialId=" ";
  
  constructor() { }

  ngOnInit() {
  }

}