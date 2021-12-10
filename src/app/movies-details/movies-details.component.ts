import { Component, Input, OnInit } from '@angular/core';
import { SwapyService } from '../swapy.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css'],
})
export class MoviesDetailsComponent implements OnInit {
  constructor(private swapyService: SwapyService) {}

  @Input() movieUrl: any;
  details;

  ngOnInit() {
    this.swapyService.getUrl(this.movieUrl).subscribe((data: any) => {
      this.details = data.results;

      console.log(this.details);
    });
  }
}
