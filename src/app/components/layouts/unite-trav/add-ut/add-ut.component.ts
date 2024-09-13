import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UTrav } from '../../../../models/u-trav';
import { UniteTravService } from '../../../../services/unite-trav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ut',
  templateUrl: './add-ut.component.html',
  styleUrl: './add-ut.component.css'
})
export class AddUTComponent implements OnInit {

  private readonly formBuilder = inject(FormBuilder);
  private readonly unitService = inject(UniteTravService);
  private readonly router = inject(Router);

  formData!: FormGroup;
  msg= '';
  errMsg='';
  isError = false;
  uT!: UTrav;


  ngOnInit(): void {
    // Initialize the form with formBuilder
    this.formData = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }





 // Method to add accident/incident
  addUnite() {

    console.log('Sending data:', this.formData.value);  //  pour voir les données envoyées

    this.unitService.addUnit(this.formData.value).subscribe({
      next: unitT => {
        this.uT = unitT;
        console.log('Données envoyées avec succès',this.uT);
        this.formData.reset();
        this.msg = 'Unité enregistrée avec succès';
        this.isError = false;
        setTimeout(() => {
          this.router.navigate(['/uniteTrav']);
        }, 3000); // Retard de 3 secondes
      },
      error: (err) => this.errMsg = err


      // error: err=>{
      //   this.errMsg = err;
      //   console.error('Error sending data', this.errMsg);
      //   this.msg = 'Erreur lors de l\'envoi des données';
      //   this.isError = true;
      //   setTimeout(() => {
      //             this.msg = '';
      //           }, 3000); // Afficher le message d'erreur pendant 3 secondes
      // }
    })
  }

  // this.unitService.addUnit(this.formData.value)
  //     .subscribe(response => {
  //       console.log('Data sent successfully', response);
  //       this.formData.reset();
  //       this.msg = 'Unité enregistrée avec succès';
  //       this.isError = false;
        // setTimeout(() => {
        //   this.router.navigate(['/uniteTrav']);
        // }, 3000); // Retard de 3 secondes
  //     }, (error: any) => {
  //       console.error('Error sending data', error);
  //       this.msg = 'Erreur lors de l\'envoi des données';
  //       this.isError = true;
  //       setTimeout(() => {
  //         this.msg = '';
  //       }, 3000); // Afficher le message d'erreur pendant 3 secondes
  //     });
  // }

}
