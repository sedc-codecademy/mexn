import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceConfig } from 'src/app/config/service-config';
import { Observable, BehaviorSubject } from 'rxjs';
import { saveAs } from "file-saver";
import { IFile } from '../interfaces/IFile';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileService
{
  private files: BehaviorSubject<IFile[]> = new BehaviorSubject([])
  public files$: Observable<IFile[]> = this.files.asObservable();

  constructor(private _http: HttpClient) { }

  initFiles()
  {
    const currentState = this.files.getValue();

    console.log(currentState)
    if (currentState.length > 0) return;

    this.getAll().subscribe()
  }

  getAll(): Observable<any>
  {
    return this._http.get(ServiceConfig.FILES)
      .pipe(tap(files =>
      {
        this.files.next(files)
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
        const files = [...this.files.getValue()];
        const index = files.findIndex(file => file._id === id);
        if (index > -1)
        {
          files.splice(index, 1);
          this.files.next(files)
        }
      }))
  }

  upload(body)
  {
    return this._http.post(ServiceConfig.UPLOAD, body)
      .pipe(tap((files: IFile[]) =>
      {
        const currentState = [...this.files.getValue()];
        this.files.next([...currentState, ...files])
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
