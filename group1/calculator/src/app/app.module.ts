import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { DisplayComponent } from './display/display.component';

import { ComponentsService } from './components.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonGroupComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ComponentsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
