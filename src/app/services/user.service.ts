import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getGithubUser(username): Observable<any>{
    return this.http.get('https://api.github.com/users/'+username+'?access_token='+environment.tk);
  }
}
