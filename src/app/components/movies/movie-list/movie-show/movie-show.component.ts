import { Component, OnInit , Input} from '@angular/core';
import { TMDB } from '../../../../configurations/tmdb.config';
import { MovieService} from '../../../../services/movie.service';


@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.css'],
  providers: [MovieService]
})

export class MovieShowComponent implements OnInit {
  @Input() movie;
  constructor(private movieService : MovieService) { }
baseUrl:any=TMDB.baseUrl;
  ngOnInit() {
  }

  addToFav() {
    this.movieService.addFav(this.movie).subscribe((res)=> {
      alert("added");
    }
    ,(err)=> {
      alert("can't add duplicate");
    });
  }
}
