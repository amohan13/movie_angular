import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  movieList=[];
  constructor() { }

  ngOnInit() {
  }

  movieRecieve(event) {

    this.movieList=event.movieList;
    

  }

}
