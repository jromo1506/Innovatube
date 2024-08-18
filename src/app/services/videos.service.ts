import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalApiService } from './global-api.service';


@Injectable({
  providedIn: 'root'
})
export class VideosService {
  


  constructor(private api:GlobalApiService, private http:HttpClient) { }


 

  likeVideo(video:any):Observable<any>{
    console.log(video,"Like Video");
    return this.http.post(this.api.getURL() + "/likeVideo",video);
  }

  dislikeVideo(video:any):Observable<any>{
    console.log(video,"Like Video");
    return this.http.post(this.api.getURL() + "/dislikeVideo",video);
  }

  getLikedVideos(id:string):Observable<any>{
    console.log(id,"Liked videos");
    return this.http.get(this.api.getURL() + "/getVideos/" + id);
  }



}
