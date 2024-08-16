import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalApiService } from './global-api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private api:GlobalApiService, private http:HttpClient) { }

  
  addUser(user:any):Observable<any>{
    console.log(user,"Add Usuario");
    return this.http.post(this.api.getURL() + "/addUser",user);
  }

  getUser(user:any){
    console.log(user,"Get Usuario");
    return this.http.post(this.api.getURL() + "/getUser",user);
  }

  authUser(user:any){
    console.log(user,"auth Usuario")
    return this.http.post(this.api.getURL() + "/authUser",user);
  }

}
