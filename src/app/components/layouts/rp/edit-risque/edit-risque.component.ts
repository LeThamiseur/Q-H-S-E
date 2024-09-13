import { Component, Input } from '@angular/core';
import { RisqueP } from '../../../../models/RisqueP';
import { ActivatedRoute, Router } from '@angular/router';
import { DangRiskService } from '../../../../services/dang-risk.service';

@Component({
  selector: 'app-edit-risque',
  templateUrl: './edit-risque.component.html',
  styleUrl: './edit-risque.component.css'
})
export class EditRisqueComponent {
  // risk: RisqueP = new RisqueP();
  // dangerId!: string;
  // riskId!: string;


  @Input() risk!:RisqueP;

  constructor(
    private route: ActivatedRoute,
    private dangRiskService: DangRiskService,
    private router: Router
  ) {}

  // ngOnInit(): void {
  //   this.dangerId = this.route.snapshot.paramMap.get('dangerId')!;
  //   this.riskId = this.route.snapshot.paramMap.get('riskId')!;
  //   this.dangRiskService.getRiskById(this.dangerId, this.riskId).subscribe(data => {
  //     this.risk = data;
  //   });
  // }

  ngOnInit(): void {
    this.getRisk();
// console.log(this.risk)
    // this.route.params.subscribe(params => {
    //   const id = `${this.risk.id}`; // Récupère l'ID des paramètres de la route
    //   this.dangRiskService.getRiskById(id).subscribe(data => {
    //     this.risk = data;

    //   });
    // });
  }

  // onSubmit(): void {
  //   this.dangRiskService.updateRisk(this.dangerId, this.riskId, this.risk).subscribe(() => {
  //     console.log('Risk updated successfully');
  //     this.router.navigate(['/RP']);  // Rediriger vers la liste des risques après la mise à jour
  //   });
  // }

  onSubmit(): void {
    this.dangRiskService.updateRisk(this.risk).subscribe(() => {
      console.log('Risk updated successfully');
      this.router.navigate(['/RP']);  // Rediriger vers la liste des risques après la mise à jour
    });
  }

  getRisk(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.dangRiskService.getRiskById(id)
      .subscribe(data => this.risk = data);
  }

}
