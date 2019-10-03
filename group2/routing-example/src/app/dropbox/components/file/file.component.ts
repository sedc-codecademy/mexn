import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFile } from '../../interfaces/IFile';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit
{
  @Output() onDownload: EventEmitter<string> = new EventEmitter();
  @Input() file: IFile;

  constructor() { }

  ngOnInit()
  {
  }

}
