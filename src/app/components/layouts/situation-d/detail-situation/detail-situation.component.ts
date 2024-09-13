import { Component, Input } from '@angular/core';
import { SituationD } from '../../../../models/situation-D';
import { DangRiskService } from '../../../../services/dang-risk.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-situation',
  templateUrl: './detail-situation.component.html',
  styleUrl: './detail-situation.component.css'
})
export class DetailSituationComponent {

  @Input() situationD ?: SituationD ;

  constructor ( private dangRiskService: DangRiskService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getSD();

    this.route.params.subscribe(params => {
      const id = `${this.situationD?.id}`; // Récupère l'ID des paramètres de la route
      this.dangRiskService.getDangRById(id).subscribe(data => {
        this.situationD = data;
      });
    });
  }

  getSD(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.dangRiskService.getDangRById(id)
      .subscribe(situation => this.situationD = situation);
  }
}
