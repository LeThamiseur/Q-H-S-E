import { Component, Input } from '@angular/core';
import { RisqueP } from '../../../../models/RisqueP';
import { DangRiskService } from '../../../../services/dang-risk.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SituationD } from '../../../../models/situation-D';

@Component({
  selector: 'app-add-risque',
  templateUrl: './add-risque.component.html',
  styleUrl: './add-risque.component.css'
})
export class AddRisqueComponent {
  situationDList: SituationD [] = [];
  newRisk: RisqueP = new RisqueP();
  msg = '';
  isError = false;
  selectedSituation!: SituationD; // Variable pour stocker la situation sélectionnée

  constructor(
    private dangRiskService: DangRiskService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
        this.dangRiskService.getDangRisk(this.situationDList).subscribe(data => {
          this.situationDList = data;
        });
      }


  onSubmit(): void {

    const selectedSituationId = this.selectedSituation.id;

    this.newRisk.situationId = selectedSituationId;

    this.dangRiskService.addRisks(this.newRisk).subscribe(() => {
      console.log('Risk updated successfully');
      this.newRisk = new RisqueP();
      this.msg = " Risque mis à jour";
      this.isError = false;
      setTimeout(() => {
        this.router.navigate(['/RP']);
        // Rediriger vers la liste des risques après la mise à jour
       }, 2000); // Retard de 2 secondes
    }),
      (    error: Error) => {
            console.error('Erreur lors de l\'ajout du risque :', error);
            this.msg= error.message;
            this.isError = true;
            setTimeout(() => {
              this.msg = '';
            }, 2000); // Afficher le message d'erreur pendant 2 secondes
          }


  }

}

// import { Component, Input } from '@angular/core';
// import { RisqueP } from '../../../../models/RisqueP';
// import { DangRiskService } from '../../../../services/dang-risk.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { SituationD } from '../../../../models/situation-D';

// @Component({
//   selector: 'app-add-risque',
//   templateUrl: './add-risque.component.html',
//   styleUrl: './add-risque.component.css'
// })
// export class AddRisqueComponent {
//   situationDList: SituationD[] = [];
//   newRisk: RisqueP = new RisqueP();
//   msg = '';
//   isError = false;
//   selectedSituation!: SituationD; // Variable pour stocker la situation sélectionnée
//   // dangerId!: string;

//   // selectedSituation!: SituationD;


//   constructor(
//     private dangRiskService: DangRiskService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {
//     // this.dangerId = this.route.snapshot.paramMap.get('dangerId')!;
//     // this.dangRiskService.getDangRById(this.dangerId).subscribe(data => {
//     //   this.situation = data.label;
//     // });
//   }
//   ngOnInit(): void {
//     this.dangRiskService.getDangRisk(this.situationDList).subscribe(data => {
//       this.situationDList = data;
//     });
//   }

//   onSubmit(): void {
//      // Soumission du formulaire ou traitement
//     //  if (this.selectedSituation) {
//       const selectedSituationId = this.selectedSituation.id;
//       console.log('ID de la situation sélectionnée :', selectedSituationId);
//       // Utilisez selectedSituationId comme nécessaire
//     // } else {
//     //   console.log('Aucune situation sélectionnée.');
//     // }


//     this.newRisk.situationId = selectedSituationId
//     console.log(this.newRisk)
//     // this.dangRiskService.addRisks(this.newRisk)
//     this.dangRiskService.addRisks(this.newRisk).subscribe(() => {
//       console.log('Risk updated successfully');
//       this.newRisk = new RisqueP();
//       this.msg = " Risque mis à jour";
//       this.isError = false;
//       setTimeout(() => {
//         this.router.navigate(['/RP']);
//       }, 2000); // Retard de 2 secondes

//       // this.router.navigate(['/RP']);
//         // Rediriger vers la liste des risques après la mise à jour
//     }),
//       (    error: Error) => {
//         console.error('Erreur lors de l\'ajout du risque :', error);
//         this.msg= error.message;
//         this.isError = true;
//         setTimeout(() => {
//           this.msg = '';
//         }, 2000); // Afficher le message d'erreur pendant 2 secondes
//       }


//   }

// }
