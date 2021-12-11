import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  @Input() movieList = [];
  @Output() nawak = new EventEmitter<String>();
  value : any;

  peuImporte(value : any) {

    this.nawak.emit(value)
  }

  constructor() {}

  ngOnInit() {}
}
