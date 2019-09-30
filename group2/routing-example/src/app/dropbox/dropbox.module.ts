import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropboxRoutingModule } from './dropbox-routing.module';
import { DropboxlayoutComponent } from './components/dropboxlayout/dropboxlayout.component';
import { FilesComponent } from './components/files/files.component';

@NgModule({
  imports: [
    CommonModule,
    DropboxRoutingModule
  ],
  declarations: [DropboxlayoutComponent, FilesComponent]
})
export class DropboxModule { }
