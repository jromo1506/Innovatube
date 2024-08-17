import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  private apiUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyBQlIET2qy6jRtxnPwb9l3gkuduV6FkXt0';

  constructor(private http:HttpClient) { }
  

  getVideoInfo(videoId: string): Observable<any> {
    const url = `${this.apiUrl}/videos?id=${videoId}&key=${this.apiKey}&part=snippet,contentDetails,statistics`;
    return this.http.get(url);
  }

  // Obtener videos aleatorios
  getRandomVideos(maxResults: number): Observable<any> {
    const randomKeywords = ['video', 'vlog', 'funny', 'music', 'tutorial', 'random'];
    const keyword = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
    const url = `${this.apiUrl}/search?part=snippet&maxResults=${maxResults}&q=${keyword}&type=video&key=${this.apiKey}`;
    return this.http.get(url);
  }
}
