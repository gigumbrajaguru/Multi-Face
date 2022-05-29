import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Job-Finder';
  deeperror: boolean;
  details: boolean;
  notification: boolean;
  errordictionary: { [id: string]: any; };
  notificationdictionary:{ [id: string]: any; };
  searchjobs: boolean;
  jobDataSet: any;
  displayableDataset: any;
  constructor() {
    this.jobDataSet = {};
    this.details = false;
    this.searchjobs = false;
    this.deeperror = false;
    this.notification = false;
    this.displayableDataset = {};
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
    if ("NEWS" === event["buttonid"].toString()) {
      this.errorPageLoader(true, "Access restricted", "403", "ivanrezis@yandex.com")
    } else if ("Skills" === event["buttonid"].toString()) {
      this.errorPageLoader(true, "Access restricted", "403", "ivanrezis@yandex.com")
    } else if ("Application" === event["buttonid"].toString()) {
      this.searchjobs = true;
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

}
