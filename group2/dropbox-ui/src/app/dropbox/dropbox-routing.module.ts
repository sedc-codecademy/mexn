import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesComponent } from './components/files/files.component';
import { DropboxlayoutComponent } from './components/dropboxlayout/dropboxlayout.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: DropboxlayoutComponent,
    children:
    [
      { path: '', redirectTo: 'files', pathMatch: 'prefix' },
      { path: "files", component: FilesComponent },
      { path: "about", component: AboutComponent },
      { path: '**', redirectTo: 'files' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropboxRoutingModule { }
