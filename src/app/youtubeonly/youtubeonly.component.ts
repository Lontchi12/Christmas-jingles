import { Component, OnInit } from '@angular/core';
import { YoutubeapiService } from '../youtubeapi.service';
import { SearchInterface } from '../search-interface';
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-youtubeonly',
  templateUrl: './youtubeonly.component.html',
  styleUrls: ['./youtubeonly.component.css'],
})
export class YoutubeonlyComponent implements OnInit {
  collection: any;
  constructor(private video: YoutubeapiService, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.video.getVideos('christmas songs').subscribe(
      (data) => {
        this.collection = data;
        console.log(this.collection);
        // this.url1 = "https://www.youtube.com/embed"
      }
    );
  }
  getembedUrl(item: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + item)
  }
}
