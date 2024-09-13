import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl ="http://localhost:3000";

  constructor(private httpclient: HttpClient) {}

  register (user: User): Observable<User> {
    return this.httpclient.post<User>(`${this.apiUrl}/users`,user);
  }

}
