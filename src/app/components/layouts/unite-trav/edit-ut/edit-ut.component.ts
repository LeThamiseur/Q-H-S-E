import { Component, Input, OnInit, inject } from '@angular/core';
import { UTrav } from '../../../../models/u-trav';
import { UniteTravService } from '../../../../services/unite-trav.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-ut',
  templateUrl: './edit-ut.component.html',
  styleUrl: './edit-ut.component.css'
})
export class EditUTComponent implements OnInit {

  private readonly formBuilder = inject(FormBuilder);
  private readonly unitService = inject(UniteTravService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  formData!: FormGroup;
  msg= '';
  errMsg='';
  isError = false;
  uT!: UTrav;


  ngOnInit(): void {
    // Obtenir l'identifiant de l'unité à partir des paramètres de route
    // this.id = this.route.snapshot.params['id'];
    this.initForm();
    this.getUnit();



  }


  // Initialiser le formulaire
  initForm(): void {
     this.formData = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
  });

  }

  getUnit():void {
    // Charger les données de l'unité à modifier
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.unitService.getUnitByID(id).subscribe({
      next: unitT => {
        this.uT = unitT;
        this.formData.patchValue({
          id: this.uT.id,
          name: this.uT.name
        });
      },
      error: err => {
        this.errMsg = 'Impossible de charger les données de l\'unité';
      }
    });
  }

  // Méthode pour mettre à jour une unité
  updateUnite() {
    console.log('Sending data:', this.formData.value);

    this.unitService.updateUnit(this.formData.value).subscribe({
      next: () => {
        this.formData.reset();
        this.msg = 'Unité mise à jour avec succès';
        setTimeout(() => {
          this.router.navigate(['/uniteTrav']);
        }, 3000); // Retard de 3 secondes
      },
      error:(err) => this.errMsg = err
    });
  }

}
