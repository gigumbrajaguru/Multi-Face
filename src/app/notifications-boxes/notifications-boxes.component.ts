import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-notifications-boxes',
  templateUrl: './notifications-boxes.component.html',
  styleUrls: ['./notifications-boxes.component.css']
})
export class NotificationsBoxesComponent implements OnInit {
  stylenotifyelement: string;
  notifytitle: string;
  notifymessage: string;
  @Input() notificationdictionary: { [id: string]: any; } = {};

  constructor() {
    this.stylenotifyelement = "fa-heart";
    this.notifytitle = "Attention";
    this.notifymessage = "Notification is here";

  }

  ngOnInit(): void {
    this.stylenotifyelement = this.notificationdictionary["stylenotifyelement"];
    this.notifytitle = this.notificationdictionary["notifytitle"];
    this.notifymessage = this.notificationdictionary["notifymessage"];
  }

}
