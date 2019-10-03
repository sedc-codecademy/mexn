import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropboxRoutingModule } from './dropbox-routing.module';
import { DropboxlayoutComponent } from './components/dropboxlayout/dropboxlayout.component';
import { FilesComponent } from './components/files/files.component';
import { HttpClientModule } from '@angular/common/http';
import { FileComponent } from './components/file/file.component';

@NgModule({
  imports: [
    CommonModule,
    DropboxRoutingModule,
    HttpClientModule
  ],
  declarations: [DropboxlayoutComponent, FilesComponent, FileComponent]
})
export class DropboxModule { }
