import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceConfig } from 'src/app/config/service-config';
import { Observable, BehaviorSubject } from 'rxjs';
import { saveAs } from "file-saver";
import { IFile } from '../interfaces/IFile';
import { tap } from 'rxjs/operators';
import { Store } from 'src/app/shared/classes/store';

@Injectable({
  providedIn: 'root'
})
export class FileService extends Store<IFile[]>
{

  constructor(private _http: HttpClient)
  {
    super()
  }

  initFiles()
  {
    const currentState = this.getAll();

    console.log(currentState)
    if (currentState && currentState.length > 0) return;

    this.getAllFiles().subscribe()
  }

  getAllFiles(): Observable<any>
  {
    return this._http.get(ServiceConfig.FILES)
      .pipe(tap(files =>
      {
        this.store(files)
      }))
  }

  getFileById(id)
  {

  }

  deleteFile(id)
  {
    return this._http.delete(ServiceConfig.DELETE + "/" + id)
      .pipe(tap(() =>
      {
        const files = [...this.getAll()];
        const index = files.findIndex(file => file._id === id);
        if (index > -1)
        {
          files.splice(index, 1);
          this.store(files)
        }
      }))
  }

  upload(body)
  {
    return this._http.post(ServiceConfig.UPLOAD, body)
      .pipe(tap((files: IFile[]) =>
      {
        const currentState = [...this.getAll()];
        // [oldstate+ files]
        this.store([...currentState, ...files])
      }))
  }

  download(filename)
  {
    this._http.post(ServiceConfig.DOWNLOAD, { filename }, { responseType: 'blob' })
      .subscribe(data =>
      {
        saveAs(data, filename)
      })
  }
}
