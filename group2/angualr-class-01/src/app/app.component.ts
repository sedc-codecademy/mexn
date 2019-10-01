import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  aboutProperty = '/about'
  onPropertyChange(inputValue: string)
  {
    console.log(inputValue)
  }
}
