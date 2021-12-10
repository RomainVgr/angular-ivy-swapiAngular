import { Component, OnInit } from '@angular/core';
import { SwapyService } from '../swapy.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {


movies: any;

  constructor(private swapyService : SwapyService ) { }

  ngOnInit() {

    this.swapyService.getData().subscribe((data: any) => {
      this.movies = data.results;
     
  });

  }
  
}
