import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dotation } from '../../../../models/dotation';
import { Equipement } from '../../../../models/equipement';
import { EquipementService } from '../../../../services/equipement.service';

@Component({
  selector: 'app-edit-dotation',
  templateUrl: './edit-dotation.component.html',
  styleUrls: ['./edit-dotation.component.css']
})
export class EditDotationComponent implements OnInit {
  dotationData: Dotation = new Dotation();
  equipementList: any[] = [];
  selectedEquipements: number[] = [];
  successMsg: string = '';
  errorMsg: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private equipementService: EquipementService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.equipementService.getDotation().subscribe((dotations) => {
        this.dotationData = dotations.find(d => d.id.toString() === id)!;
        this.equipementService.getEquipementList([]).subscribe((equipements) => {
          this.equipementList = this.dotationData.id_Equi.map(id => equipements.find(e => e.id === id));
        });
      });
    }
  }

  // onSelect(event: Event): void {
  //   const selectElement = event.target as HTMLSelectElement;
  //   this.selectedEquipements = Array.from(selectElement.selectedOptions).map(option => Number(option.value));
  // }

  onSubmit(): void {
    // this.dotationData.id_Equi = this.selectedEquipements;

    this.equipementService.updateDotation(this.dotationData).subscribe(
      () => {
        this.successMsg = 'Dotation mise à jour avec succès';
        this.errorMsg = '';
      },
      error => {
        this.errorMsg = 'Erreur lors de la mise à jour de la dotation.';
        console.error(error);
      }
    );
  }
}

