import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { FavComponent } from './components/fav/fav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MovieSearchComponent } from './components/movies/movie-search/movie-search.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieShowComponent } from './components/movies/movie-list/movie-show/movie-show.component';
import { FavListComponent } from './components/fav/fav-list/fav-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';



const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'fav', component: FavComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FavComponent,
    HeaderComponent,
    FooterComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieShowComponent,
    FavListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
