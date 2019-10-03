import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceConfig } from 'src/app/config/service-config';
import { Observable } from 'rxjs';
import { saveAs } from "file-saver";

@Injectable({
  providedIn: 'root'
})
export class FileService
{

  constructor(private _http: HttpClient) { }

  getAll(): Observable<any>
  {
    return this._http.get(ServiceConfig.FILES)
  }

  getFileById(id)
  {

  }

  deleteFile(id)
  {

  }

  upload(body)
  {

  }

  download(filename)
  {
    this._http.post(ServiceConfig.DOWNLOAD, { filename }, { responseType: 'blob' })
      .subscribe(data =>
      {
        saveAs(data, 'sedc mafia')
      })
  }
}
