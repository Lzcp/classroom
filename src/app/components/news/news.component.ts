import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private id:string = 'newId';
  private msg:string;
  constructor() { 
    this.msg = '这是一个绑定属性'
  }

  ngOnInit() {
  }

}
