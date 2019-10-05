import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/dropbox/services/file.service';
import { IFile } from '../../interfaces/IFile';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit
{
  files$: Observable<IFile[]> = this._fileServie.store$;

  constructor(private _fileServie: FileService, private _authService: AuthService)
  {
    this._fileServie.initFiles()
  }

  ngOnInit()
  {

  }

  onDownload(fileName: string)
  {
    this._fileServie.download(fileName)
  }

  update()
  {
    this._authService.editUser({ email: 'Nesto bezvrska' })
  }

  onDelete(id)
  {
    this._fileServie.deleteFile(id).subscribe()
  }

}
