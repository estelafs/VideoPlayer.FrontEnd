import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { SaveService } from '../save.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  constructor(private communicationService: CommunicationService, private saveService : SaveService) { }

  isButtonVisible : Boolean =  false;
  videoUrl: any;

  ngOnInit(): void {
    this.communicationService.url.subscribe(v => { 
      if(v !== ""){
        this.communicationService.playsVideo(v); 
        this.saveService.addToHistory(v);

        this.saveService.updateBookmarkButton(v);
        this.saveService.bookMarkButton.subscribe(v => {
          this.isButtonVisible = v;
        });
      }
        
      this.videoUrl = this.communicationService.videoUrl;
    });
  }

  addVideoToBookmarks(){
    this.saveService.addToBookmarks(this.communicationService.url.value);
  }
}
