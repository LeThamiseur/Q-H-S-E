import { Component, OnInit } from '@angular/core';
import { AccincService } from '../../../../services/accinc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-declaration',
  templateUrl: './edit-declaration.component.html',
  styleUrl: './edit-declaration.component.css'
})
export class EditDeclarationComponent implements OnInit {

  accincForm!: FormGroup;
  msg = '';
  isError = false;

  constructor(
    private fb: FormBuilder,
    private accincService: AccincService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getAcc();
  }

  initForm(): void {
    this.accincForm = this.fb.group({
      id: ['', Validators.required],
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

  getAcc(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.accincService.getAccincByID(id)
      .subscribe(accinc => {
        this.accincForm.patchValue(accinc);
      });
  }

  save(): void {
    if (this.accincForm.valid) {
      console.log(this.accincForm.value)
      this.accincService.updateAccinc(this.accincForm.value).subscribe(response => {
        console.log('Evènement mis à jour avec succès', response);
        this.msg = 'Evènement mis à jour avec succès';
        this.isError = false;
        setTimeout(() => {
          this.router.navigate(['/evenements']);
        }, 1000); // Retard de 1 seconde
      },
      (error: any) => {
        console.error('Error lors la mise à jour de l\'évènement', error);
        this.msg = 'Error lors la mise à jour de l\'évènement';
        this.isError = true;
        setTimeout(() => {
          this.msg = '';
        }, 5000); // Afficher le message d'erreur pendant 5 secondes
      }
    );
    }
  }
}
