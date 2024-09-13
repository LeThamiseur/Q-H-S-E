import { HttpErrorResponse } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { FieldsOnError } from '../../models/error';

export interface FieldMessage {
  field: string;
  message: string;
}

export interface ResponseFormErrors {
  type: string;
  title: string;
  status: number;
  errors: FieldMessage[];
  traceId: string;
}

@Injectable({
  providedIn: 'root'
})


export class FormsValidators {

  private errorMsg!: FieldsOnError[];

  setBackendErrors(error: FieldsOnError[]): void {

    this.errorMsg = error;

  }
  getBackendError(controlName: string | null): string | null {
    const errorItem = this.errorMsg.find(item => controlName === item.label);

    if (errorItem) {
      console.log('k0');
      return errorItem.description;
    }

    console.log('k1');
    return null;
  }


  clearErrors(): void {
    // this.errorMsg = null;
  }



}

// @Injectable({
//   providedIn: 'root'
// })
// export class FormsValidators {

//   private errorMsg: FieldsOnError[] = [];

//   // Méthode pour setter les erreurs backend
//   setBackendErrors(error: FieldsOnError[]): void {
//     this.errorMsg = error;
//   }

//   // Méthode pour récupérer une erreur spécifique
//   getBackendError(controlName: string): string | null {
//     if (!this.errorMsg || this.errorMsg.length === 0) {
//       return null;
//     }

//     // Rechercher une erreur correspondant au champ 'controlName'
//     const errorItem = this.errorMsg.find(item => item.label === controlName);

//     return errorItem ? errorItem.description : null;
//   }

//   clearErrors(): void {
//     this.errorMsg = [];
//   }
// }

