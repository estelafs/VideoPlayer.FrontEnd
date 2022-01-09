import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor() { }

  urlArray = [];
  newUrl = new BehaviorSubject<String>("");
  
  bookmarkArray = [];
  newBookmark = new BehaviorSubject<String>("");

  bookMarkButton = new BehaviorSubject<Boolean>(false);
  bookmarkCount = 0;

  checkArray(url: any, array : any[]){
    return (url !== "" && array.indexOf(url) === -1) == true ? true : false;
  }

  addToHistory(url: any){
    if(this.checkArray(url,this.urlArray)){
      this.urlArray.push(url);  
      localStorage.setItem('urlArray', JSON.stringify(this.urlArray));
      this.newUrl.next(url);
    }
  }

  addToBookmarks(url: any){
    if(this.checkArray(url,this.bookmarkArray)){
      this.bookmarkArray.push(url);
      localStorage.setItem('bookmarkArray', JSON.stringify(this.bookmarkArray));
      this.newBookmark.next("");
      this.bookmarkCount++;
      console.log('number of bookmarks saved: ',this.bookmarkCount);
      this.bookMarkButton.next(false);
    }
  }
  
  updateBookmarkButton(url: any){
    if(this.checkArray(url,this.bookmarkArray))
      this.bookMarkButton.next(true);
    else
      this.bookMarkButton.next(false);
  }

}