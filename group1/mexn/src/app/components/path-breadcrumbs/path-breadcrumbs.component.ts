import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-path-breadcrumbs',
  templateUrl: './path-breadcrumbs.component.html',
  styleUrls: ['./path-breadcrumbs.component.css']
})
export class PathBreadcrumbsComponent implements OnInit {
  
  @Input() path:Array<string> = [];
  @Input() count:number;
  @Output() changePath:EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    console.log(this.path);
  }
  
  returnBack(path)
  {
    let newPath = [];
    let found = false;
    this.path.map((x, i) => {
      
      if( ! found && x != path )
      newPath.push(x);
      else if(found && this.path[i -1 ] == path)
      newPath.push(this.path[i - 1]);
      else if(x == path)
      found = true;
    })
    
    this.changePath.emit(newPath);
  }

}
