import { Component, VERSION } from '@angular/core';
import { SwapyService } from './swapy.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  movies;
  details;
  isLoading = true;

  constructor(private swapyService: SwapyService) {}

  patapouf(value: any) {
    //console.log(value)

    this.swapyService.getUrl(value).subscribe((data: any) => {
      this.details = data;
      this.isLoading = false
    });
  }

  ngOnInit() {
    this.swapyService.getData().subscribe((data: any) => {
      this.movies = data.results;
      this.isLoading = false
    });
  }
}
