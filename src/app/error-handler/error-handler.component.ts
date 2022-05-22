import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent implements OnInit {
  errormessage: string;
  errorcode: string;
  contactid: string;

  @Input() errordictionary: { [id: string]: any; } = {};

  constructor() {
    this.errormessage = "Access restricted";
    this.errorcode = "403";
    this.contactid = ""

  }

  ngOnInit(): void {
    this.errormessage = this.errordictionary["error_message"];
    this.errorcode = this.errordictionary["error_code"];
    this.contactid = this.errordictionary["contact"];
  }

  reportIssue() {
  }

}
