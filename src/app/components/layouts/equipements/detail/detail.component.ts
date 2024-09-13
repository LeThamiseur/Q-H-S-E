import { Component, Input } from '@angular/core';
import { Equipement } from '../../../../models/equipement';
import { EquipementService } from '../../../../services/equipement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  @Input() equipement!: Equipement;

  constructor ( private equipementService: EquipementService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getEquip();

    // this.route.params.subscribe(params => {
    //   const id = `${this.equipement.id}`; // Récupère l'ID des paramètres de la route
    //   this.equipementService.getEquipByID(id).subscribe(data => {
    //     this.equipement = data;
    //   });
    // });
  }

  getEquip(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.equipementService.getEquipByID(id)
      .subscribe(equipement => this.equipement = equipement);
  }

}
