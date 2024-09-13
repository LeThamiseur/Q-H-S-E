import { Component } from '@angular/core';
import { Equipement } from '../../../../models/equipement';
import { EquipementService } from '../../../../services/equipement.service';
import { Dotation } from '../../../../models/dotation';

@Component({
  selector: 'app-add-dotation',
  templateUrl: './add-dotation.component.html',
  styleUrl: './add-dotation.component.css'
})
export class AddDotationComponent {
  equipementList : Equipement [] = [];
  selectedEquipements: string[] = [];
  dotationData: Dotation = new Dotation();
  successMsg: string = '';
  errorMsg: string= '';

  constructor(private equipementService : EquipementService) {}

  ngOnInit(): void {
    // affiche la liste des équipements
        this.equipementService.getEquipementList(this.equipementList).subscribe(data => {
          this.equipementList = data;
        });
      }

      onSelect(event: Event): void {
        const selectElement = event.target as HTMLSelectElement;
        this.selectedEquipements = Array.from(selectElement.selectedOptions).map(option => (option.value));

      }

      getEquipementDesignation(id: number): string {
        const equipement = this.equipementList.find(e => Number(e.id) === id);
        return equipement ? equipement.label : '';
      }

    onSubmit(): void {

      // Vérifiez d'abord toutes les quantités
        for (let id of this.selectedEquipements) {
        const equipement = this.equipementList.find(e => e.id === id);
        if (equipement && equipement.quantity <= 0) {
          this.errorMsg = `L'équipement ${equipement.label} n'est pas disponible.`;
          return; // Stopper le processus si une quantité est insuffisante
        }
      }

    // Si toutes les quantités sont suffisantes, procédez à la mise à jour et à l'ajout de la dotation
          this.selectedEquipements.forEach(id => {
        const equipement = this.equipementList.find(e => e.id === id);
        if (equipement) {
          const newQuantity = equipement.quantity - 1;
          this.equipementService.updateEquipementQuantity(id, newQuantity).subscribe(updatedEquip => {
            console.log(`Quantité de l'équipement id=${id} mise à jour à ${newQuantity}`);
            // Mettez à jour la quantité dans la liste locale pour éviter une nouvelle requête de récupération
            equipement.quantity = newQuantity;
          }, error => {
            console.error('Erreur de mise à jour de la quantité', error);
            this.errorMsg = `Erreur de mise à jour de la quantité pour l'équipement ${equipement.label}.`;
          });
        }
      });


      this.dotationData.id_Equi = this.selectedEquipements;
      // Ajoutez la dotation
      this.equipementService.addDotation(this.dotationData).subscribe(() => {
        console.log('Dotation ajoutée avec succès');
        this.dotationData = new Dotation();
        this.selectedEquipements = [];
        this.successMsg = 'Dotation effectuée avec succès'
        this.errorMsg = '';
      }, error => {
        console.error('Erreur lors de l\'ajout de la dotation', error);
        this.errorMsg = 'Erreur lors de l\'ajout de la dotation.';
      });

    }


}



