import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { FormsModule } from '@angular/forms';
import { ToggleDirective } from './toggle.directive';
import { HoverDirective } from './hover.directive';
import { SortByPipe } from './sort-by.pipe';
import { CustomService } from './custom.service';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ToggleDirective,
    HoverDirective,
    SortByPipe,
    NoteComponent
    //  here coems all directives, components, pipes
  ],
  imports: [
    BrowserModule,
    FormsModule
    // all outside modules
  ],
  providers: [
    // here comes all services and providers
    CustomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
