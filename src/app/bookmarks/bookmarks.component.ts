import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { SaveService } from '../save.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  constructor(private saveService : SaveService, private communicationService : CommunicationService) { }

  bookmarkArray = [];

  ngOnInit(): void {
    this.saveService.newBookmark.subscribe(() => { 
      this.bookmarkArray = this.saveService.bookmarkArray;
    });
  }

  playsFromBookmarks(url: any)
  {
    this.communicationService.url.next(url);
  }

}
