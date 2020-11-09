import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private httpclient:HttpClient) {  }

  getRepos(repoUrl): Observable<any>{
      let access_token = "?access_token=" + environment.tk;
      return this.httpclient.get(repoUrl+access_token);
  }
}
