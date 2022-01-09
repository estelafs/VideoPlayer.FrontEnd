import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmbedVideoService } from 'ngx-embed-video';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private embedService: EmbedVideoService,) { }

  url = new BehaviorSubject<String>("");

  videoUrl: any;
  urlPlaying: String;

  playsVideo(newUrl: String) {
    this.urlPlaying = newUrl
    this.videoUrl = this.embedService.embed(this.urlPlaying, {
      attr: { width: "100%", "height": "360px" }
    });
  }

}
