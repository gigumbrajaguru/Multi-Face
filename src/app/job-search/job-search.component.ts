import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {

  @Output() eventClicked = new EventEmitter<Event>();

  constructor() {
  }

  ngOnInit(): void {


  }

  onClickEvent(event: any) {
    this.eventClicked.emit(event);
  }

}
