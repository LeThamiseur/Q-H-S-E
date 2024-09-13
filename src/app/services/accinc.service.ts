import { Injectable } from '@angular/core';
import { Accinc } from '../models/accinc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AccincService {

  private apiUrl = 'http://qhse-api.runasp.net/api/situation';

  // private apiUrl = '/api/situation'; //26/06 - à supprimer : proxy.conf.json et ce j'ai ajouté dans angular.son (serve{option{}}), sans oublier l'adresse plus haut

  // private apiUrl = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpclient: HttpClient) {}

  getAccIncList(accinc:Accinc[]): Observable<Accinc[]> {
    return this.httpclient.get<Accinc[]>(this.apiUrl)
    .pipe(
      tap(_ => console.log('AccIncList récupérée')),
      catchError(this.handleError<Accinc[]>('getAccIncList', []))
    );
  }

  // voir une déclaration
  getAccincByID(id: string): Observable<Accinc> {
    return this.httpclient.get<Accinc>(`${this.apiUrl}/${id}`);
  }

  /** PUT: modifier une déclaration  */

  updateAccinc(accinc: Accinc): Observable<Accinc> {
    return this.httpclient.put<Accinc>(`${this.apiUrl}/${accinc.id}`, accinc, this.httpOptions).pipe(
      tap(_ =>console.log(`updated AccInc id=${accinc.id}`)),
      catchError(this.handleError<Accinc>('AccInc'))
    );
  }

  /** POST: ajouter une déclaration*/

  addAccident(accidentData: Accinc): Observable<Accinc> {
    // const data : Accinc = {
    //   id : accidentData.id,
    //   type : accidentData.type,
    //   nature : accidentData.nature,
    //   locationAccident: accidentData.locationAccident,
    //   dateAccident : accidentData.dateAccident,
    //   description : accidentData.description,
    //   timeAccident: accidentData.timeAccident,
    //   task: accidentData.task,
    //   consequence: accidentData.consequence,
    //   dommage: accidentData.dommage,
    //   witness: accidentData.witness,
    //   matricule: accidentData.matricule,
    //   service: accidentData.service,
    //   poste: accidentData.poste,
    //   contract: accidentData.contract

    // }
    console.log('Sending POST request to API with data:', accidentData);
    return this.httpclient.post<Accinc>(`${this.apiUrl}`, accidentData, this.httpOptions).pipe(
      tap((newAccinc: Accinc) =>console.log(`created AccInc`,newAccinc)),
      // catchError(this.handleError<Accinc>('addAccident'))
    );
  }

  /** DELETE: supprimer une déclaration */
  deleteAccinc(id: string): Observable<Accinc> {
    return this.httpclient.delete<Accinc>(`${this.apiUrl}/${id}`).pipe(
      tap(_ => console.log(`deleted accinc id=${id}`)),
      catchError(this.handleError<Accinc>('deleteHero'))
    );
  }


//  getAccIncList(accinc:Accinc[]): Observable<Accinc[]> {
//     return this.httpclient.get<Accinc[]>(`${this.apiUrl}/acc_inc`)
//     .pipe(
//       tap(_ => console.log('AccIncList récupérée')),
//       catchError(this.handleError<Accinc[]>('getAccIncList', []))
//     );
//   }


  // voir une déclaration
  // getAccincByID(id: string): Observable<Accinc> {
  //   return this.httpclient.get<Accinc>(`${this.apiUrl}/acc_inc/${id}`);
  // }


  /** PUT: modifier une déclaration  */
  // updateAccinc(accinc: Accinc): Observable<Accinc> {
  //   return this.httpclient.put<Accinc>(`${this.apiUrl}/acc_inc/${accinc.id}`, accinc, this.httpOptions).pipe(
  //     tap(_ =>console.log(`updated AccInc id=${accinc.id}`)),
  //     catchError(this.handleError<Accinc>('AccInc'))
  //   );
  // }

   /** POST: ajouter une déclaration*/
  //  addAccident(accidentData: Accinc): Observable<Accinc> {
  //     return this.httpclient.post<Accinc>(`${this.apiUrl}/acc_inc`, accidentData);
  //   }


    /** DELETE: supprimer une déclaration */
    // deleteAccinc(id: string): Observable<Accinc> {
    //   return this.httpclient.delete<Accinc>(`${this.apiUrl}/acc_inc/${id}`, this.httpOptions).pipe(
    //     tap(_ => console.log(`deleted accinc id=${id}`)),
    //     catchError(this.handleError<Accinc>('deleteHero'))
    //   );
    // }



    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
          if (error.error && error.error.errors) {
              return throwError(() => ({
                  status: error.status,
                  title: error.error.title || 'Une erreur s\'est produite',
                  errors: error.error.errors // Ceci contient les erreurs spécifiques des champs
              }));
          } else {
              return throwError(() => ({
                  status: error.status,
                  title: 'Une erreur s\'est produite',
                  errors: [] // Retourne une liste vide si aucune erreur spécifique n'est trouvée
              }));
          }
      };
    }



  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

}
