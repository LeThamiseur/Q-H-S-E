import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccincService } from '../../../../services/accinc.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsValidators } from '../../../../core/validators/formsValidator';


export interface FieldsOnError {
  id: string;
  description: string;
  label: string;
}

export interface ResponseFormError {
  error: HttpErrorResponse;
  success: number;
  title: string;
}
@Component({
  selector: 'app-declaration-form',
  templateUrl: './declaration-form.component.html',
  styleUrl: './declaration-form.component.css'
})
export class DeclarationFormComponent implements OnInit {
  form!: FormGroup;
  msg = '';
  isError = false;
  errorMsg!: any[];

  private readonly accincService = inject(AccincService);
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  protected readonly formValidators = inject(FormsValidators);

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      type: ['', Validators.required],
      victime: ['', Validators.required],
      matricule: ['', Validators.required],
      service: ['', Validators.required],
      poste: ['', Validators.required],
      contract: ['', Validators.required],
      nature: ['', Validators.required],
      dateAccident: ['', Validators.required],
      timeAccident: ['', Validators.required],
      locationAccident: ['', Validators.required],
      task: ['', Validators.required],
      consequence: ['', Validators.required],
      dommage: ['', Validators.required],
      description: ['', Validators.required],
      measure: ['', Validators.required],
      witness: ['', Validators.required]
    });
  }

  addAccInc(): void {
    // if (this.form.invalid) {
    //   return;
    // }

    const formattedTimeAccident = `${this.form.value.timeAccident}:00`;

    const formData = {
      ...this.form.value,
      timeAccident: formattedTimeAccident
    };

    this.accincService.addAccident(formData).subscribe({
      next: (response) => {
        console.log('Data sent successfully', response);
        this.msg = 'Déclaration enregistrée avec succès';
        this.isError = false;
        this.form.reset();
        setTimeout(() => {
          this.router.navigate(['/evenements']);
        }, 1000);
      },
      // error: (error: Error) => {
      //   console.error('Error sending data', error);
      //   this.msg = error.message;
      //   console.log('Error123', error.message)
      //   this.isError = true;
      //   setTimeout(() => {
      //     this.msg = '';
      //   }, 5000);
      // }
      error: (error: FieldsOnError[]) => {

        this.form.markAllAsTouched();
        this.errorMsg = error;
        console.log('Error123', this.errorMsg);
        // this.isError = true;
        // setTimeout(() => {
        //   this.msg = '';
        // }, 5000);
      }
    });
  }

  getBackendError(controlName: string): string | null {

    return this.formValidators.getBackendError(controlName);
  }


}





// Template driven form

// import { Component, inject } from '@angular/core';
// import { Accinc } from '../../../../models/accinc';
// import { AccincService } from '../../../../services/accinc.service';
// import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-declaration-form',
//   templateUrl: './declaration-form.component.html',
//   styleUrl: './declaration-form.component.css'
// })
// export class DeclarationFormComponent {

//   private readonly accincService = inject(AccincService);
//   private readonly router = inject(Router);
//   private readonly formBuilder = inject(FormBuilder);


//     formData: Accinc = new Accinc();
//     msg= '';
//     isError = false;



//     resetForm(formDirective: NgForm) {
//       this.formData = new Accinc();
//       formDirective.resetForm();
//     }



//   addAccInc(formDirective: NgForm) {
//     const [hours, minutes] = this.formData.timeAccident.split(':');
//     const formattedTimeAccident = `${hours}:${minutes}:00`;

//     this.formData.timeAccident = formattedTimeAccident;

//     this.accincService.addAccident(this.formData)
//       .subscribe({
//         next: response => {
//           console.log('Data sent successfully', response);
//           this.resetForm(formDirective);
//           this.msg = 'Déclaration enregistrée avec succès';
//           this.isError = false;
//           setTimeout(() => {
//             this.router.navigate(['/evenements']);
//           }, 1000);
//         },
//         error: (error: Error) => {
//           console.error('Error sending data', error);
//           this.msg = error.message;
//           this.isError = true;
//           setTimeout(() => {
//             this.msg = '';
//           }, 5000);
//         }
//       });
//   }

// }



