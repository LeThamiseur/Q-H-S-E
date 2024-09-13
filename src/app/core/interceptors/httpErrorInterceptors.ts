import { Injectable, inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormsValidators } from '../validators/formsValidator';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private readonly formValidators = inject(FormsValidators)

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // Erreur côté client
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          
          // Erreur côté serveur
          switch (error.status) {
            case 400:
              errorMessage = 'Bad Request';
              if (error.error.fieldsOnError) {
                // Supposons que le backend renvoie les erreurs de validation ici
                this.formValidators.setBackendErrors(error.error.fieldsOnError);
              }
              break;
            case 401:
              errorMessage = 'Unauthorized';
              break;
            case 404:
              errorMessage = 'Not Found';
              break;
            case 500:
              errorMessage = 'Internal Server Error';
              break;
            default:
              errorMessage = `Unexpected error: ${error.status}`;
              break;
          }
        }

       

        // Retourne l'erreur sous forme observable pour permettre aux abonnés de le gérer
        return throwError(error.error);
      })
    );
  }
}
