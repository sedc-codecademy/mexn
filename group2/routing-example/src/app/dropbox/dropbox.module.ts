import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropboxRoutingModule } from './dropbox-routing.module';
import { DropboxlayoutComponent } from './components/dropboxlayout/dropboxlayout.component';
import { FilesComponent } from './components/files/files.component';
import { HttpClientModule } from '@angular/common/http';
import { FileComponent } from './components/file/file.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { UploadComponent } from './components/upload/upload.component';

@NgModule({
  imports: [
    CommonModule,
    DropboxRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [DropboxlayoutComponent, FilesComponent, FileComponent, AboutComponent, UploadComponent]
})
export class DropboxModule { }
