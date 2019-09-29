import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';

import { TopNavService } from './services/top-nav.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { TopNavHoverDirective } from './directives/top-nav-hover.directive';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { LoginComponent } from './components/login/login.component';
import { FileListingComponent } from './components/file-listing/file-listing.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    TopNavHoverDirective,
    SideNavComponent,
    WorkspaceComponent,
    LoginComponent,
    FileListingComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TopNavService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
