import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],

  declarations: [
    AppComponent,
    HelloComponent,
    MoviesListComponent,
    MoviesDetailsComponent,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
