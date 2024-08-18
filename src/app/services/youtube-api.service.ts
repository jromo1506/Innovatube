import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin ,throwError} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  private apiUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyDku2evqiECm-6uqW4wZnQLGxEHwYjalB8';
  private videosSubject = new BehaviorSubject<any[]>([]);
  videos$ = this.videosSubject.asObservable();

  constructor(private http:HttpClient) { }

  
  

  getVideoInfo(videoId: string): Observable<any> {
    const url = `${this.apiUrl}/videos?id=${videoId}&key=${this.apiKey}&part=snippet,contentDetails,statistics`;
    return this.http.get(url);
  }

  // Obtener videos aleatorios
  getRandomVideos(maxResults: number): Observable<any> {
    const randomKeywords = ['code', 'angular', 'nodejs', 'asp.net', 'tutorial', 'linux'];
    const keyword = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
    const url = `${this.apiUrl}/search?part=snippet&maxResults=${maxResults}&q=${keyword}&type=video&key=${this.apiKey}`;
    return this.http.get(url);
  }

  searchVideos(query: string, maxResults: number): Observable<any[]> {
    const searchUrl = `${this.apiUrl}/search?part=snippet&maxResults=${maxResults}&q=${query}&type=video&key=${this.apiKey}`;
    
    return this.http.get<any>(searchUrl).pipe(
      tap(response => {
        console.log('Search response:', response); // Verifica la respuesta aquí
      }),
      map((response: any) => {
        if (!response || !response.items) {
          throw new Error('Unexpected response format');
        }
        return response.items; // Retorna solo los videos
      }),
      catchError(error => {
        console.error('Error in searchVideos:', error);
        throw new Error('Failed to search videos');
      })
    );
  }

  // getVideoInfo(videoId: string): Observable<any> {
  //   const params = new HttpParams()
  //     .set('id', videoId)
  //     .set('part', 'snippet,contentDetails,statistics')
  //     .set('key', this.apiKey);

  //   return this.http.get<any>(this.apiUrl, { params });
  // }

}
