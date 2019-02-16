import { Component, OnInit } from '@angular/core';
import { DataMsg } from './header.data';
import { HeadersInformations } from './headersInformation';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string;
  oldname: string;
  msg:any;
  private dataMsg: DataMsg = {
    id: 1,
    name: 'hero'
  }
  private headersInformations = HeadersInformations;
  constructor() { }

  ngOnInit() {
    this.msg = 'angular的组件';
    this.oldname = this.name || '';
  }
  event () {
    if(this.name === this.oldname){
      console.log("1")
    }else{
      console.log("2")
      console.log("3")
      console.log("3")
      console.log('3');
    }
  }

}
