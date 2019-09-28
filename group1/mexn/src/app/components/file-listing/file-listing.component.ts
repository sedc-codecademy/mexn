import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'app-file-listing',
  templateUrl: './file-listing.component.html',
  styleUrls: ['./file-listing.component.css']
})
export class FileListingComponent implements OnInit {

  userDir:Array<any> = [];
  
  constructor(
    private files:FilesService
  ) { }

  ngOnInit() {
    this._loadUserDir();
  }
  
  private _loadUserDir()
  {
    this.files.getUserDir().subscribe((data:any) => { console.log(data)
      this.userDir = data.result;
    })
  }

}
