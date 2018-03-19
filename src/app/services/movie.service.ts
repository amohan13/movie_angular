import { Injectable } from '@angular/core';
import {TMDB} from '../configurations/tmdb.config';
import {App} from '../configurations/app.config';

import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor( private http : Http) { }

  private headers = new Headers({'Content-Type':'application/json'})

  getMovie(searchInput : String) {
    return this.http.get(TMDB.search_api+searchInput)
    .map(data => data.json(),
    (err) => {
      console.log("error encountered");
    });
  }
  
  addFav(movie){
    return this.http.post(App.apiUrl+"movies",movie, {headers: this.headers});
  } 

  getFavMovie() {
    return this.http.get(App.apiUrl+"db")
    .map(data => data.json(),
    (err) => {
      console.log("error encountered");
    });
  }

  deleteFav(movie){
    return this.http.delete(App.apiUrl+"movies/"+movie.id, {headers: this.headers});
  } 
}
