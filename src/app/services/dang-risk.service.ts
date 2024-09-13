import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SituationD } from '../models/situation-D';
import { RisqueP } from '../models/RisqueP';

@Injectable({
  providedIn: 'root'
})
export class DangRiskService {

  private apiUrl = 'http://localhost:3000';
  private api_Url = 'http://qhse-api.runasp.net/api/DangerousSituation';
  private api_Url1 = 'http://qhse-api.runasp.net/api/risk';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private httpclient: HttpClient) { }

  // danger

 /** GET dangerList */
  getDangRisk(danger: SituationD[]): Observable<SituationD[]> {
    return this.httpclient.get<SituationD[]>(`${this.api_Url}`)
    .pipe(
      tap(_ => console.log('List récupérée'))
      // ,catchError(this.handleError<SituationD[]>('getDangRiskList', []))
    );
  }

   /** GET danger by id*/
   getDangRById(id: string): Observable<SituationD> {
    console.log('getDanger:', id );
    return this.httpclient.get<SituationD>(`${this.api_Url}/${id}`);
  }

  /** PUT: modifier une situation dangereuse  */
  updateDang(danger: SituationD): Observable<SituationD> {
    return this.httpclient.put<SituationD>(`${this.api_Url}/${danger.id}`, danger, this.httpOptions).pipe(
      tap(_ =>console.log(`updated danger id=${danger.id}`))
      // catchError(this.handleError<SituationD>('danger'))
    );
  }

  addDang(danger: SituationD): Observable<SituationD> {
    return this.httpclient.post<SituationD>(`${this.api_Url}`, danger, this.httpOptions).pipe(
      tap((newDang: SituationD) => console.log(`SD ajoutée/ id=${newDang.id}`))
    );
  }

  deleteDang(id: string): Observable<SituationD> {
    return this.httpclient.delete<SituationD>(`${this.api_Url}/${id}`, this.httpOptions).pipe(
      tap(_ => console.log(`deleted danger id=${id}`)),
      catchError(this.handleError<SituationD>('deleteDang'))
    );
  }


  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {


  //     try {

  //       return throwError(() => ({
  //         status: error.status,
  //         title: error.error?.title || 'Une erreur s\'est produite',
  //         error
  //       }));
  //     } catch (error) {
  //       return of(error as any)
  //     }
  //   };
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



  //Risque
// afficher la liste des risque
getRiskList(risk: RisqueP[]): Observable<RisqueP[]> {
  return this.httpclient.get<RisqueP[]>(this.api_Url1)
    .pipe(
      tap(_=> console.log('List récupérée')),
      // catchError(this.handleError<RisqueP[]>('getRiskList', []))
    )

  // return this.httpclient.get<RisqueP[]>(`${this.api_Url1}`)
  // .pipe(
  //   tap(_ => console.log('List récupérée')),
  //   catchError(this.handleError<SituationD[]>('getRiskList', []))
  // );
}


// afficher un risque
  // getRiskById(dangerId: string, riskId: string): Observable<RisqueP> {
  //   return this.httpclient.get<RisqueP>(`${this.apiUrl}/dangers/${dangerId}/risques/${riskId}`)
  //     .pipe(
  //       tap(_ => console.log(`Fetched risk id=${riskId} for danger id=${dangerId}`)),
  //       catchError(this.handleError<RisqueP>(`getRiskById id=${riskId}`))
  //     );
  // }

  getRiskById(riskId: string): Observable<RisqueP> {
    return this.httpclient.get<RisqueP>(`${this.api_Url1}/${riskId}`)

  }

  // Mettre un risque à jour
  // updateRisk(dangerId: string, riskId: string, riskData: RisqueP): Observable<RisqueP> {
  //   return this.httpclient.put<RisqueP>(`${this.apiUrl}/dangers/${dangerId}/risques/${riskId}`, riskData, this.httpOptions)
  //     .pipe(
  //       tap(_ => console.log(`updated risk id=${riskId}`)),
  //       catchError(this.handleError<RisqueP>('updateRisk'))
  //     );
  // }

  updateRisk(risk: RisqueP): Observable<RisqueP> {
    return this.httpclient.put<RisqueP>(`${this.api_Url1}/${risk.id}`, risk, this.httpOptions)
      .pipe(
        tap(_ => console.log(`updated risk id=${risk.id}`)),
      );
  }

  /** POST: ajouter un risque à une situation dangereuse */
  // addRisk(dangerId: string, risk: RisqueP): Observable<RisqueP> {
  //   return this.httpclient.post<RisqueP>(`${this.apiUrl}/dangers/${dangerId}/risques`, risk, this.httpOptions).pipe(
  //     tap((newRisk: RisqueP) => console.log(`Risque ajouté/id=${newRisk.id}`)),
  //     catchError(this.handleError<RisqueP>('addRisk'))
  //   );
  // }

  // Ajouter un risque
  addRisks(risk: RisqueP): Observable<RisqueP> {
    return this.httpclient.post<RisqueP>(`${this.api_Url1}`, risk, this.httpOptions).pipe(
      tap((newRisk: RisqueP) => console.log(`Risque ajouté/id=${newRisk.id}`)),
      catchError(this.handleError<RisqueP>('addRisk'))
    );
  }

  /** DELETE: supprimer un risque d'une situation dangereuse */
  // deleteRisk(dangerId: string, riskId: string): Observable<void> {
  //   return this.httpclient.delete<void>(`${this.apiUrl}/dangers/${dangerId}/risques/${riskId}`, this.httpOptions).pipe(
  //     tap(_ => console.log(`Risque supprimé/id=${riskId}`)),
  //     catchError(this.handleError<void>('deleteRisk'))
  //   );
  // }

  deleteRisk( riskId: string): Observable<RisqueP> {
    return this.httpclient.delete<RisqueP>(`${this.api_Url1}/${riskId}`,this.httpOptions).pipe(
      tap(_=> console.log(`Risque supprimé/id=${riskId}`)),
      catchError(this.handleError<RisqueP>('deleteRisk'))
    )
    // return this.httpclient.delete<RisqueP>(`${this.api_Url1}/${riskId}`, this.httpOptions).pipe(
    //   tap(_ => console.log(`Risque supprimé/id=${riskId}`)),
    //   catchError(this.handleError<void>('deleteRisk'))
    // );
  }

}
