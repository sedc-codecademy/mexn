import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../services/files.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-file-listing',
  templateUrl: './file-listing.component.html',
  styleUrls: ['./file-listing.component.css']
})
export class FileListingComponent implements OnInit {

  userDir:Array<any> = [];
  userData:any;
  currentPath:Array<string> = [];
  
  constructor(
    private files:FilesService,
    private user:UserService
  ) { }

  ngOnInit() {
    this._loadUserDir();
    this.userData = this.user.getCurrentUser();
    
    if(this.userData && this.userData.result)
    this.currentPath.push(this.userData.result._id);
  }
  
  private _loadUserDir()
  {
    this.files.getUserDir().subscribe((data:any) => {
      this.userDir = data.result;
    })
  }
  
  updatePath(value:string)
  {
    if(value)
    this.currentPath.push(value);
  }
  
  breadCrumbChange(newPath)
  {
    if(newPath && newPath.length)
    this.currentPath = newPath;
  }
  
}
