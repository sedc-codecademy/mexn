import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-folder',
  templateUrl: './file-folder.component.html',
  styleUrls: ['./file-folder.component.css']
})
export class FileFolderComponent implements OnInit {
  
  @Input() item:any;
  @Input() path:Array<string> = [];
  @Output() changePath:EventEmitter<any> = new EventEmitter();
  
  type:boolean;
  
  constructor() { }

  ngOnInit()
  {
    if(this.item)
    this.type = this._checkFileOrFolder(this.item);
  }
  
  makeUrlFromArray()
  {
    return this.path.join("/");
  }
  
  changeFolder()
  {
    this.changePath.emit(this.item);
  }
  
  private _checkFileOrFolder(item):boolean
  {
    return this.item.split(".").length > 1;
  }

}
