import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit
{

  constructor(private _filesService: FileService) { }

  ngOnInit()
  {
  }

  onFileUpload({ target: { files } })
  {
    const filesToUpload = Array.from(files);
    const formData = new FormData();
    filesToUpload.forEach((file: File) =>
    {
      formData.append('files', file, file.name)
    })

    this._filesService.upload(formData).subscribe()
  }

}
