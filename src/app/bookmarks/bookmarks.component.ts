import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit} from '@angular/core';
import { CommunicationService } from '../communication.service';
import { SaveService } from '../save.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent implements OnInit {

  constructor(private saveService : SaveService, private communicationService : CommunicationService) { }

  bookmarkArray = [];

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('bookmarkArray'));
    console.log("bookmarks in local storage: " + data)

    if(data !== null){
      this.bookmarkArray = data;
      this.saveService.bookmarkArray = data;
      this.saveService.bookmarkCount = ((localStorage.getItem('bookmarkArray')).split(",")).length;
      console.log('number of bookmarks saved: ',this.saveService.bookmarkCount);
    }

    this.saveService.newBookmark.subscribe(v => { 
      this.bookmarkArray = this.saveService.bookmarkArray;
    });
  }

  playsFromBookmarks(url: any)
  {
    this.communicationService.url.next(url);
  }

}
