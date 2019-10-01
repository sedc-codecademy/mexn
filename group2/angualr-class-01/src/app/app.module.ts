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
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'notes',
    component: NotesComponent,
  },
  {
    path: 'notes/:id',
    component: NoteComponent,
  },
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ToggleDirective,
    HoverDirective,
    SortByPipe,
    NoteComponent,
    HomeComponent,
    PagenotfoundComponent,
    AboutComponent
    //  here coems all directives, components, pipes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
    // all outside modules
  ],
  providers: [
    // here comes all services and providers
    CustomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
