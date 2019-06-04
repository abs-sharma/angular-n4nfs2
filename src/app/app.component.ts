import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  isavailable:boolean=false;
  Variety = ["Invoice", "Taxes", "Budget", "Fiscal"];
   myClickFunction($event) { 
      this.isavailable = !this.isavailable;
      alert("Button is clicked");
      console.log(event);
}

}