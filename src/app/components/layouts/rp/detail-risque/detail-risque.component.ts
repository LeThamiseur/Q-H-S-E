import { Component, Input } from '@angular/core';
import { RisqueP } from '../../../../models/RisqueP';
import { DangRiskService } from '../../../../services/dang-risk.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-risque',
  templateUrl: './detail-risque.component.html',
  styleUrl: './detail-risque.component.css'
})
export class DetailRisqueComponent {

  @Input() risk!: RisqueP;

  constructor ( private dangerRService: DangRiskService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getRisk();

    // this.route.params.subscribe(params => {
    //   const id = `${this.risk.id}`; // Récupère l'ID des paramètres de la route
    //   this.dangerRService.getRiskById(id).subscribe(data => {
    //     this.risk = data;
    //   });
    // });
  }

  getRisk(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.dangerRService.getRiskById(id)
      .subscribe(rk => this.risk = rk);
  }

}




// import { Component, Input } from '@angular/core';
// import { RisqueP } from '../../../../models/RisqueP';
// import { DangRiskService } from '../../../../services/dang-risk.service';
// import { ActivatedRoute } from '@angular/router';
// import { SituationD } from '../../../../models/situation-D';

// @Component({
//   selector: 'app-detail-risque',
//   templateUrl: './detail-risque.component.html',
//   styleUrl: './detail-risque.component.css'
// })
// export class DetailRisqueComponent {

//   @Input() risk!: RisqueP;
//   danger!: SituationD;

//   constructor ( private dangerRService: DangRiskService, private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       const id = params['id']; // Récupère l'ID des paramètres de la route
//       this.getRisk(id);
//     });
//   }

//   getRisk(id: string): void {
//     this.dangerRService.getRiskById(id).subscribe(data => {
//       this.risk = data;
//       this.getDangerousSituation(this.risk.situationId);
//     });
//   }

//   getDangerousSituation(situationId: string): void {
//     this.dangerRService.getDangRById(situationId).subscribe(data => {
//       this.danger = data;
//     });
//   }

// }
