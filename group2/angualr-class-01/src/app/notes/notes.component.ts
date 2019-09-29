import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

class Note
{

}
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit
{

  notes: Note = [{
    id: 1,
    title: "some note",
    description: 'dummy',
    price: 1500
  },
  {
    id: 2,
    title: "some note 2",
    description: 'dummy',
    price: 158
  },
  {
    id: 3,
    title: "some note 3",
    description: 'dummy',
    price: 250
  }
  ]
  @Output() onPropetyChange: EventEmitter<string> = new EventEmitter()
  inputValue: string = 'Default';

  constructor() { }

  ngOnInit()
  {
    console.log(this.notes)
  }

  logInputValue()
  {
    console.log(this.inputValue);
    this.onPropetyChange.emit(this.inputValue);
  }
}