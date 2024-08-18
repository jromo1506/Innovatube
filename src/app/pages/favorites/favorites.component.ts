import { Component } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { UserAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  credentials: { userId: string, username: string } | null = null;
  
  likedVideos:any[]=[];

  isLogged:boolean=false;

  constructor(private videoService:VideosService,private userAuth:UserAuthService) {
    this.userAuth.credentials$.subscribe(credentials => {
      this.credentials = credentials;
      this.isLogged=true;
    });
    
  }

  ngOnInit(){
   if(this.credentials){
    console.log(this.credentials.userId,"ID USUARIO");
    this.videoService.getLikedVideos(this.credentials.userId).subscribe(likes=>{
      this.likedVideos=likes;
      console.log(likes,"Likes");
    });

   }
   else{
      this.isLogged=false;
   }
  }
  



}
