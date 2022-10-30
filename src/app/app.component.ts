import {Component, OnInit} from '@angular/core';
import  {MovieWatchSericeService} from "../services/movie-watch-serice.service"
import {VideoData} from "../data_class/video-data"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Multi-Face';
  deeperror: boolean;
  waiter: boolean;
  details: boolean;
  notification: boolean;
  errordictionary: { [id: string]: any; };
  notificationdictionary:{ [id: string]: any; };
  searchjobs: boolean;
  jobDataSet: any;
  user_movie_name: string;
  user_movie_year : number
  watchmovies:boolean;
  displayableMovie: any;
  displayableDataset: any;
  constructor
  (
    private videodataservice:MovieWatchSericeService
  )
  {
    this.jobDataSet = {};
    this.details = false;
    this.searchjobs = false;
    this.watchmovies = false;
    this.displayableMovie = "";
    this.deeperror = false;
    this.notification = false;
    this.user_movie_name = "";
    this.user_movie_year = 0;
    this.displayableDataset = {};
    this.waiter = false;
    this.errordictionary = {
      "error_message": "Access restricted", "error_code": "403",
      "contact": "ivanrezis@yandex.com"
    };
    this.notificationdictionary = {
      "stylenotifyelement": "fa-heart",
      "notifytitle": "Attention",
      "notifymessage": "Notification is here"
    };

  }

  ngOnInit() {

  }

  componentSelector(event: { [id: string]: string }) {
    this.searchjobs = false;
    this.details = false;
    this.watchmovies = false;
    if ("NEWS" === event["buttonid"].toString()) {
      this.errorPageLoader(true, "Access restricted", "403", "ivanrezis@yandex.com")
    } else if ("Movies" === event["buttonid"].toString()) {
      this.watchmovies = true;
      this.searchjobs = false;
      this.errorPageLoader(false, "Access restricted", "403", "ivanrezis@yandex.com")
    } else if ("Application" === event["buttonid"].toString()) {
      this.searchjobs = true;
      this.watchmovies = false;
      this.errorPageLoader(false, "Access restricted", "403", "ivanrezis@yandex.com")
    } else if ("Shop" === event["buttonid"].toString()) {
      this.errorPageLoader(true, "Access restricted", "403", "ivanrezis@yandex.com")
    } else if ("Research" === event["buttonid"].toString()) {
      this.errorPageLoader(true, "Access restricted", "403", "ivanrezis@yandex.com")
    } else if ("About" === event["buttonid"].toString()) {
      this.errorPageLoader(true, "Access restricted", "403", "ivanrezis@yandex.com")
    }
  }

  errorPageLoader(deeperror: boolean, errormessage: string, errorcode: string, contact: string){
    this.deeperror = deeperror;
    this.notification = false;
    this.errordictionary = {
      "error_message": errormessage, "error_code": errorcode,
      "contact": contact,
    };
  }

  seeJobData(event: any){
    this.details = true;
    this.displayableDataset = {};
    this.jobDataSet = event
  }
  searchMovie(event: VideoData){

  }

}
