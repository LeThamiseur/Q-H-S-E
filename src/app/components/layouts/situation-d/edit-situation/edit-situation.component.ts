import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SituationD, SituationDForm } from '../../../../models/situation-D';
import { DangRiskService } from '../../../../services/dang-risk.service';
import { FormsValidators } from '../../../../core/validators/formsValidator';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from '../../../../core/store/shared.service';
import { BaseComponent } from '../../../base/base.component';
import { Observable, map, takeUntil } from 'rxjs';



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
  selector: 'app-edit-situation',
  templateUrl: './edit-situation.component.html',
  styleUrl: './edit-situation.component.css'
})
export class EditSituationComponent extends BaseComponent implements OnInit, OnDestroy {
  private readonly dangeriskService = inject(DangRiskService);
  protected readonly formValidators = inject(FormsValidators);
  private readonly formBuilder = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  protected readonly sharedService = inject(SharedService);


  form!: FormGroup<SituationDForm>;
  msg = '';
  errorMsg!: any[];
  situationId!: string;
  situationD!: Observable<SituationD>;

  constructor() {
    super();
    this.initForm();
    this.situationId = this.sharedService.situationDStore()?.situationId!;
  }

  ngOnInit(): void {
    if (this.situationId) {
      this.dangeriskService.getDangRById(this.situationId).pipe(takeUntil(this.destroy)).subscribe({
        next: (situation: SituationD) => {
          this.patchForm(situation);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération', err);
        }
      });
    }
    else if (this.situationId && this.sharedService.situationDStore()?.viewMode!) {
      this.situationD = this.route.data.pipe(map(data => data['situation']))


    }
  }

  initForm() {
    this.form = this.formBuilder.group({
      Label: ['', Validators.required],
      Description: new FormControl('', [Validators.required])
    });
  }

  patchForm(situation: SituationD) {
    this.form.patchValue({
      Label: situation.label,
      Description: situation.description
    })
  }

  // validateForm() {
  //   if (this.situationId) {
  //     const updatedSituation: SituationD = {
  //       id: this.situationId,
  //       label: this.form.value.Label!,
  //       description: this.form.value.Description!
  //     };

  //     this.dangeriskService.updateDang(updatedSituation).pipe(takeUntil(this.destroy)).subscribe({
  //       next: () => {
  //         this.msg = 'Situation dangereuse mise à jour avec succès';
  //         setTimeout(() => {
  //           this.router.navigate(['/SD']);
  //         }, 2000);
  //       },
  //       error: (error: FieldsOnError[]) => {
  //         console.error('Erreur lors de la mise à jour de la situation', error);
  //         this.errorMsg = error;
  //       }
  //     });
  //   }
  //   else {
  //     this.dangeriskService.addDang(this.form.getRawValue() as any).subscribe({
  //       next: (response) => {
  //         console.log('SD créée',response);
  //         this.form.reset(); // reinitialiser le formu
  //         this.msg = `Situation dangereuse créée avec succès`;
  //         setTimeout(() => {
  //           this.router.navigate(['/SD']);
  //         }, 2000); // retarder de 2s
  //       },
  //       error: (error: FieldsOnError[]) => {
  //         this.form.markAllAsTouched();
  //         // console.log('EmptyFields',error[1].description)
  //         console.log('EmptyFields',error)
  //         this.errorMsg = error;
  //       }
  //     })
  //   }
  // }

  validateForm() {
    if (this.situationId) {
      const updatedSituation: SituationD = {
        id: this.situationId,
        label: this.form.value.Label!,
        description: this.form.value.Description!
      };

      this.dangeriskService.updateDang(updatedSituation).pipe(takeUntil(this.destroy)).subscribe({
        next: () => {
          this.msg = 'Situation dangereuse mise à jour avec succès';
          setTimeout(() => {
            this.router.navigate(['/SD']);
          }, 2000);
        },
        error: (error: FieldsOnError[]) => {
          console.error('Erreur lors de la mise à jour de la situation', error);
          this.formValidators.setBackendErrors(error);  // Définir les erreurs backend
          this.errorMsg = error;  
        }
      });
    } else {
      this.dangeriskService.addDang(this.form.getRawValue() as any).subscribe({
        next: (response) => {
          this.form.reset(); // Réinitialiser le formulaire
          this.msg = `Situation dangereuse créée avec succès`;
          setTimeout(() => {
            this.router.navigate(['/SD']);
          }, 2000);
        },
        error: (error: FieldsOnError[]) => {
          console.error('Erreur lors de la création', error);
          this.formValidators.setBackendErrors(error);  // Définir les erreurs backend
          this.form.markAllAsTouched();  // Marquer tous les champs comme touchés pour l'affichage des erreurs
        }
      });
    }
  }



  getBackendError(controlName: string): string | null {

    return this.formValidators.getBackendError(controlName);
  }

  override ngOnDestroy(): void {
    console.log('ngOnDestroy', this.situationId);
    this.sharedService.situationDStore.set(null);
  }
}
