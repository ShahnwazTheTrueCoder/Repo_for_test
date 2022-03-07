import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() parentDataComing:string='';

  @Output() dataGoingToParent = new EventEmitter<any>();

  data:string= "this is data from child"

  sendingData(){
    this.dataGoingToParent.emit(this.data);
    debugger;
  }
  constructor() {
  }


  ngOnInit(): void {
  }

}
