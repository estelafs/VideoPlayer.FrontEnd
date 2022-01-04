import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  urlHistory = [];
  constructor() { }

  ngOnInit(): void {
    const localData = JSON.parse(localStorage.getItem('urlArray'));
    console.log("achei isso history: " + localData)

    if(localData == null) 
      this.urlHistory = []
    else 
      this.urlHistory = localData
  }

}
