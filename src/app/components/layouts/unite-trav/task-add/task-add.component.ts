import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniteTravService } from '../../../../services/unite-trav.service';
import { Router } from '@angular/router';
import { UTrav } from '../../../../models/u-trav';
import { HttpErrorResponse } from '@angular/common/http';


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
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly uTService = inject(UniteTravService);
  private readonly router = inject(Router);

  form!: FormGroup;  // Formulaire réactif
  workUnits: UTrav[] = [];  // Stocke les unités de travail récupérées
  msg = '';
  isError = false;
  errorMsg!: any[];

  ngOnInit(): void {
    // Initialisation du formulaire réactif avec les contrôles et leurs validations
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      workUnitId: ['', Validators.required]
    });

    // Appel pour récupérer les unités de travail
    this.uTService.getUniteTravail().subscribe({
      next: (response) => {
        this.workUnits = response;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des unités de travail', error);
      }
    });
  }

  // Méthode pour soumettre le formulaire
  onSubmit(): void {
    // if (this.form.valid) {
      this.uTService.addTask(this.form.value).subscribe({
        next: () => {
          this.msg = 'Tâche enregistrée';
          this.form.reset();
          setTimeout(() => {
            this.router.navigate(['/uniteTrav/tasks']);
          }, 2000);
        },
        error: (error: FieldsOnError[]) => {
          this.form.markAllAsTouched();
          console.error('Erreur lors de l\'enregistrement de la tâche', error);
          this.isError = true;
          this.errorMsg = error;
        }
      });
    // }
  }


  // onSubmit(): void {
  //   if (this.form.valid) {
  //     this.uTService.addTask(this.form.value).subscribe({
  //       next: () => {
  //         this.msg = 'Tâche enregistrée';
  //         this.form.reset();
  //         setTimeout(() => {
  //           this.router.navigate(['/uniteTrav/tasks']);
  //         }, 2000);
  //       },
  //       error: (error) => {
  //         if (error.errors) {
  //           Object.keys(error.errors).forEach(field => {
  //             const formField = this.form.get(field);
  //             if (formField) {
  //               formField.setErrors({ serverError: error.errors[field] });
  //             }
  //           });
  //         }
  //         this.isError = true;
  //         this.errorMsg = error.errors || [];
  //       }
  //     });
  //   }
  // }

}
