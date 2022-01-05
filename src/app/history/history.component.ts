import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { SaveService } from '../save.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  urlHistory = [];

  constructor(private saveService : SaveService, private communicationService : CommunicationService) { }

  ngOnInit(): void 
  {
      this.saveService.newUrl.subscribe(() => { 
        this.urlHistory = this.saveService.urlArray;
      });
  }

  playsFromHistory(url: any)
  {
    this.communicationService.url.next(url);
  }

}
