import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TestModels } from '../models/testModels';


@Injectable({
  providedIn: 'root'
})
export class ZtestRisk {


  private apiUrl = 'http://qhse-api.runasp.net/api/DangerousSituation';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private httpclient: HttpClient) { }

  // danger

 /** GET dangerList */
  getDangRisk(danger: TestModels[]): Observable<TestModels[]> {
    return this.httpclient.get<TestModels[]>(`${this.apiUrl}`)
    .pipe(
      tap(_ => console.log('List récupérée')),
      catchError(this.handleError<TestModels[]>('getDangRiskList', []))
    );
  }

   /** GET danger by id*/
   getDangRById(id: string): Observable<TestModels> {
    return this.httpclient.get<TestModels>(`${this.apiUrl}/${id}`);
  }

  /** PUT: modifier une situation dangereuse  */
  updateDang(danger: TestModels): Observable<TestModels> {
    return this.httpclient.put<TestModels>(`${this.apiUrl}/${danger.id}`, danger, this.httpOptions).pipe(
      tap(_ =>console.log(`updated danger id=${danger.id}`)),
      catchError(this.handleError<TestModels>('danger'))
    );
  }

  addDang(danger: TestModels): Observable<TestModels> {
    return this.httpclient.post<TestModels>(`${this.apiUrl}`, danger, this.httpOptions).pipe(
      tap((newDang: TestModels) => console.log(`SD ajoutée/ id=${newDang.id}`)),
      catchError(this.handleError<TestModels>('addDang'))
    );
  }

  
  deleteDang(id: string): Observable<TestModels> {
    return this.httpclient.delete<TestModels>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
      tap(_ => console.log(`deleted danger id=${id}`)),
      catchError(this.handleError<TestModels>('deleteDang'))
    );
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
