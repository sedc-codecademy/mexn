import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  
  @Input() user:User;
  
  constructor() { }

  ngOnInit() {
  }

}
