import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  toDisplay:Array<any> = [];
  
  sendToDisplay(values:Array<any>)
  {
    this.toDisplay = values;
  }
  
  calculateOnDisplay()
  {
    let result = eval(this.toDisplay.join(""));
    this.toDisplay = [result];
  }
}
