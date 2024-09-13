import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpclient: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    return this.httpclient.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          sessionStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/home']);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  logout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['/signin']);
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('user') !== null;
  }

  getUser() {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
