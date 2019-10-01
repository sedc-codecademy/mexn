import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const notes = [{
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

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit
{

  @Input() note;

  constructor(private active: ActivatedRoute) { }

  ngOnInit()
  {
    const id = this.active.snapshot.params.id;
    console.log(notes)
    if(!id) return
    this.note = notes.find(n => n.id === +id);

    console.log(this.note)
  }

}
