import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/dropbox/services/file.service';
import { IFile } from '../../interfaces/IFile';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit
{
  files: IFile[];
  constructor(private _fileServie: FileService, private _authService: AuthService) { }

  ngOnInit()
  {
    this._fileServie.getAll()
      .subscribe(files =>
      {
        this.files = files
      })
  }

  onDownload(fileName: string)
  {
    this._fileServie.download(fileName)
  }

  update()
  {
    this._authService.editUser({email:'Nesto bezvrska'})
  }

}
