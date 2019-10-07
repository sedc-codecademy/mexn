import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule 
  ],
  declarations: [NavComponent, LoaderComponent],
  exports:[
    NavComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
