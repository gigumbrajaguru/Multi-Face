import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Output() selectedmenu = new EventEmitter<{ [id: string]: string; }>();

  constructor() {
  }

  ngOnInit(): void {
    this.buttonOnClick("Application", "Application")
  }

  buttonOnClick(buttonid: string, buttonname: string) {
    this.selectedmenu.emit({ "buttonid": buttonid, "buttonname": buttonname});
  }

}
