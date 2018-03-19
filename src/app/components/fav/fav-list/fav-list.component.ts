import { Component, OnInit,Input } from '@angular/core';
import { MovieService} from '../../../services/movie.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css'],
  providers: [MovieService]
})
export class FavListComponent implements OnInit {
  @Input() movie;
  constructor(private movieService : MovieService) { }

  ngOnInit() {
  }

deleteFav(){
  this.movieService.deleteFav(this.movie).subscribe((res)=>{
    alert(res);}
    ,(err)=>
  {
    alert(err);
  });
}

}
