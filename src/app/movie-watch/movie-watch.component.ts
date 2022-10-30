import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {VideoData} from "../../data_class/video-data";
import {MovieWatchSericeService} from "../../services/movie-watch-serice.service";

@Component({
  selector: 'app-movie-watch',
  templateUrl: './movie-watch.component.html',
  styleUrls: ['./movie-watch.component.css']
})
export class MovieWatchComponent implements OnInit {

  @Output() eventClicked = new EventEmitter<Event>();
  @Output() searchClicked = new EventEmitter<VideoData>();
  servers: any[];
  searchmovie: any;
  results: any[];
  search_id: any;
  searchresults: any[];
  constructor(private videodataservice:MovieWatchSericeService) {
    this.searchmovie = <VideoData>{};
    this.servers = [];
    this.results = [];
    this.searchresults = [];

  }

  ngOnInit(): void {
    this.servers = [];
    this.results = [];


  }

  onClickEvent(event: any) {
    this.eventClicked.emit(event);

  }

  searchMovie(event: any){
    let element = <VideoData>{};
    element.user_movie_name = event
    element.user_movie_year = 0
    this.searchClicked.emit(element);
    this.videodataservice.find(element).subscribe(data_set => {
      this.searchresults = data_set;
    });

  }

}
