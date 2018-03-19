import { Component, OnInit } from '@angular/core';
import { MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
  providers: [MovieService]
})
export class FavComponent implements OnInit {
  movieList = [];
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.movieService.getFavMovie().subscribe((res)=>{
      this.movieList=res.movies;
      console.log(this.movieList);
    },(err)=>{
      console.log("error encountered");
    }) ;
}
  }
