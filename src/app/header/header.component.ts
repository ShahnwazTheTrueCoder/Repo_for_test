import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  parentData: string = 'this is the data from parente..';

  comingFromChild: any = null;

  comingdata(event: any) {
    debugger;
    this.comingFromChild = event;
    debugger;
    console.log(this.comingFromChild);
  }
  constructor() {}

  ngOnInit(): void {}
}
