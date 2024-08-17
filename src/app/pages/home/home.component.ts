import { Component } from '@angular/core';
import { YoutubeApiService } from 'src/app/services/youtube-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  videos: any[] = [];
  videoInfo: any;

  constructor(private youtubeService: YoutubeApiService) {}

  ngOnInit() {
    const videoId = 'ID_DEL_VIDEO';
    this.youtubeService.getVideoInfo(videoId).subscribe(data => {
      this.videoInfo = data.items[0];
    });

    const maxResults = 5; // Puedes ajustar este número según tus necesidades
    this.youtubeService.getRandomVideos(maxResults).subscribe(data => {
      this.videos = data.items;
    });
  }

}
