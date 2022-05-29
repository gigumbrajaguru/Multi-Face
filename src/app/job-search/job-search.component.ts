import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {

  @Output() eventClicked = new EventEmitter<Event>();
  tags: any[];
  jobdata: { [name: string]: string };
  results: any[];
  constructor() {
    this.tags = [];
    this.results = [];
    this.jobdata = {};
  }

  ngOnInit(): void {
    this.tags = ["One", "Two"];
    this.jobdata = {"job_title": "Software Engineer"};

    this.results = [{"job_title": "Software Engineer"}, {"job_title": "Software Developer"}];

  }

  onClickEvent(event: any) {
    this.eventClicked.emit(event);
  }

}
