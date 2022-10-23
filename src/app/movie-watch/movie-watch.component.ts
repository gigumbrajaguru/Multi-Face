import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-movie-watch',
  templateUrl: './movie-watch.component.html',
  styleUrls: ['./movie-watch.component.css']
})
export class MovieWatchComponent implements OnInit {

  @Output() eventClicked = new EventEmitter<Event>();
  servers: any[];
  results: any[];
  constructor() {
    this.servers = [];
    this.results = [];
  }

  ngOnInit(): void {
    this.servers = [];
    this.results = [];

  }

  onClickEvent(event: any) {
    this.eventClicked.emit(event);
  }


  searchMovie(event: any){
    this.eventClicked.emit(event);
  }

}
