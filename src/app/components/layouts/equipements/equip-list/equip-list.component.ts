import { Component } from '@angular/core';
import { Equipement } from '../../../../models/equipement';
import { EquipementService } from '../../../../services/equipement.service';

@Component({
  selector: 'app-equip-list',
  templateUrl: './equip-list.component.html',
  styleUrl: './equip-list.component.css'
})
export class EquipListComponent {
  equipementList : Equipement [] = [];
  filteredEquipementList : Equipement [] = [];
  msg="";
  errorMsg = "";

  constructor(private equipementService : EquipementService) {}

  ngOnInit(): void {
// affiche la liste des équipements
    this.equipementService.getEquipementList(this.equipementList).subscribe(data => {
      this.equipementList = data;
      this.filteredEquipementList = this.equipementList
    });
  }

  // Delete equipement
  delete(equip: Equipement): void {

    if (confirm('Êtes vous certain(e) de vouloir supprimer cet évènement?')){
      this.equipementList = this.equipementList.filter(eqp => eqp !== equip);
    this.equipementService.deleteEquip(equip.id).subscribe(()=> {
        this.msg = `Equipement supprimé avec succès`;
        setTimeout(() => {
          this.msg = ``;
        }, 3000); // Retard de 3 secondes
      }, error => {
        this.errorMsg = `Erreur de suppression`;
        setTimeout(() => {
          this.errorMsg = ``;
        }, 3000); // Retard de 3 secondes
      });
    }
  }

  // recherche de déclaration en fonction du critère de recherche
  // filterResults(text: string) {
  //   if (!text) {
  //     this.filteredEquipementList=this.equipementList;
  //     return;
  //   }
  //   this.filteredEquipementList = this.equipementList.filter(
  //     equip => equip.code.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
  //               equip.label.toLocaleLowerCase().includes(text.toLocaleLowerCase())
  //   )
  // }


}
