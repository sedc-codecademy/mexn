import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';

import { TopNavService } from './services/top-nav.service';
import { UserService } from './services/user.service';

import { TopNavHoverDirective } from './directives/top-nav-hover.directive';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { LoginComponent } from './components/login/login.component';
import { FileListingComponent } from './components/file-listing/file-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    TopNavHoverDirective,
    SideNavComponent,
    WorkspaceComponent,
    LoginComponent,
    FileListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TopNavService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
