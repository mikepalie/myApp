import { Injectable } from '@angular/core';
import { user } from './githubMockup'
import { User } from './githubUser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpService: HttpClient) { }

  private URL = 'https://api.github.com/users/';

  getUser(name: string): Observable<User> {
    let url: string = this.URL + name;      //'https://api.github.com/users/Mixalis';

    return this.httpService.get<User>(url);
  }
}
