import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { UTrav } from '../models/u-trav';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class UniteTravService {

  // private apiUrl = 'http://localhost:3000';
  private apiUrl1 = 'http://qhse-api.runasp.net/api/workUnit';
  private apiUrl2 = 'http://qhse-api.runasp.net/api/assignment';

  private readonly httpclient = inject(HttpClient);

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  // getUniteTravail(): Observable<UTrav[]> {
  //   return this.httpclient.get<UTrav[]>(`${this.apiUrl}/Unite_Travail`)
  //   .pipe(
  //     tap(_=> console.log('Liste Unite travail recupérée')),
  //     catchError( this.handleError<UTrav[]>('getUniteTravail', []))
  //   );
  // }

  getUniteTravail(): Observable<UTrav[]> {
    return this.httpclient.get<UTrav[]>(this.apiUrl1)
    .pipe(
      tap(_=> console.log('Liste Unite travail recupérée')),
      catchError( this.handleError)
    );
  }

  // voir une unité
  getUnitByID(id: string): Observable<UTrav> {
    return this.httpclient.get<UTrav>(`${this.apiUrl1}/${id}`);
  }

  /** PUT: modifier une déclaration  */

  updateUnit(unit: UTrav): Observable<UTrav> {
    return this.httpclient.put<UTrav>(`${this.apiUrl1}/${unit.id}`, unit, this.httpOptions).pipe(
      tap(_ =>console.log(`updated unit id=${unit.id}`)),
      catchError( this.handleError)
    );
  }

  addUnit(unit: UTrav): Observable<UTrav> {
    console.log('Sending POST request to API with data:', unit);  // Ajoutez ceci pour loguer les données envoyées
    return this.httpclient.post<UTrav>(`${this.apiUrl1}`, unit, this.httpOptions).pipe(
      tap((newUnit: UTrav) =>console.log(`created Unit ${newUnit}`)),
      catchError( this.handleError)
    );
  }

  /** DELETE: supprimer une UT */
  deleteUT(id: string): Observable<UTrav> {
    return this.httpclient.delete<UTrav>(`${this.apiUrl1}/${id}`, this.httpOptions).pipe(
      tap(_ => console.log(`deleted unit id=${id}`)),
    );
  }

  // Task

    // task list
    getTaskList(): Observable<Task[]> {
      return this.httpclient.get<Task[]>(this.apiUrl2)
      .pipe(
        tap(_=> console.log('Liste de tâches recupérée')),
      );
    }

    addTask(task: Task): Observable<Task> {
      console.log('Sending POST request to API with data:', task);  // Ajoutez ceci pour loguer les données envoyées
      return this.httpclient.post<Task>(`${this.apiUrl2}`, task, this.httpOptions).pipe(
        tap((newtask: Task) =>console.log(`created Unit `,newtask)),
      );
    }

    deleteTask(id: string): Observable<Task> {
      return this.httpclient.delete<Task>(`${this.apiUrl2}/${id}`, this.httpOptions).pipe(
        tap(_ => console.log(`deleted task id=${id}`)),
      );
    }

    getTaskByID(id: string): Observable<Task> {
      return this.httpclient.get<Task>(`${this.apiUrl2}/${id}`);
    }

    updateTask(task: Task): Observable<Task> {
      return this.httpclient.put<Task>(`${this.apiUrl2}/${task.id}`, task, this.httpOptions).pipe(
        tap(_ =>console.log(`updated unit id=${task.id}`)),
      );
    }



  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //       if (error.error && error.error.errors) {
  //           return throwError(() => ({
  //               status: error.status,
  //               title: error.error.title || 'Une erreur s\'est produite',
  //               errors: error.error.errors // Ceci contient les erreurs spécifiques des champs
  //           }));
  //       } else {
  //           return throwError(() => ({
  //               status: error.status,
  //               title: 'Une erreur s\'est produite',
  //               errors: [] // Retourne une liste vide si aucune erreur spécifique n'est trouvée
  //           }));
  //       }
  //   };
  // }


  private handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      errorMessage = `Une erreur s'est produite : ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        errorMessage = `Le backend a renvoyé le code  ${error.status}, le contenu était: `, error.error;
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.' +
      '\n ' + errorMessage
    ));
  }


}
