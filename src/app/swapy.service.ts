import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class SwapyService {

  constructor( private httpClient: HttpClient) 
    {}

    url : any

  getData() {
    return this.httpClient.get("https://swapi.dev/api/films");
  }

  getUrl(url) {
    return this.httpClient.get(url);
  }

}