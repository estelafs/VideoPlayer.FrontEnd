import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { SaveService } from '../save.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  constructor(private communicationService: CommunicationService,
    private saveService : SaveService) { }

  isButtonVisible : Boolean =  this.saveService.bookMarkButton.value;
  videoUrl: any;
  url: String = "https://www.youtube.com/watch?v=_kMqZecJtzw";

  ngOnInit(): void {
    this.communicationService.url.subscribe(v => { 
      this.communicationService.playsVideo(v); 
      this.videoUrl = this.communicationService.videoUrl;

      this.saveService.updateBookmarkButton(v);

      this.saveService.bookMarkButton.subscribe(v => {
        this.isButtonVisible = v;
       });

      this.saveService.addToHistory(v);
    });
  }

  addVideoToBookmarks(){
    this.saveService.addToBookmarks(this.communicationService.url.value);
  }
}
