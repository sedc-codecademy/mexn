import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit
{
  isActive$: Observable<boolean> = this._loaderService.isActive$;

  constructor(private _loaderService: LoaderService) { }

  ngOnInit()
  {
  }

}
