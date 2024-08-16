import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {
  isStarred: boolean = false;
  videos = [
    { 
      id: 1, 
      title: 'Video 1', 
      views: '1000 views', 
      uploadDate: '2024-08-01', 
      channelName: 'Channel 1', 
      description: 'Description for Video 1', 
      isStarred: false 
    },
    { 
      id: 2, 
      title: 'Video 2', 
      views: '2000 views', 
      uploadDate: '2024-08-02', 
      channelName: 'Channel 2', 
      description: 'Description for Video 2', 
      isStarred: false 
    },
    { 
      id: 3, 
      title: 'Video 3', 
      views: '3000 views', 
      uploadDate: '2024-08-03', 
      channelName: 'Channel 3', 
      description: 'Description for Video 3', 
      isStarred: false 
    }
  ];

  toggleStar(video: any) {
    video.isStarred = !video.isStarred;
  }
}
