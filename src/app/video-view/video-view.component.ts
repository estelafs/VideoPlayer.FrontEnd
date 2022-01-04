import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  constructor(private embedService: EmbedVideoService, private communicationService: CommunicationService) { }

  videoUrl: any;
  url: String = "https://www.youtube.com/watch?v=_kMqZecJtzw";

  ngOnInit(): void {
    this.communicationService.url.subscribe(v => { this.playsVideo(v); });
  }

  playsVideo(newUrl: String) {
    this.url = newUrl
    this.videoUrl = this.embedService.embed(this.url, {
      attr: { width: "100%", "height": "360px" }
    });
  }

}
