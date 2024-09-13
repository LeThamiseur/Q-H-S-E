import { Component, Input } from '@angular/core';
import { Equipement } from '../../../../models/equipement';
import { EquipementService } from '../../../../services/equipement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-equip',
  templateUrl: './edit-equip.component.html',
  styleUrl: './edit-equip.component.css'
})
export class EditEquipComponent {

  @Input() equipement!: Equipement;
  msg = '';
  isError = false;

  constructor(private equipementService: EquipementService,
    private router : Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getEquip();

    // this.route.params.subscribe(params => {
    //   const id = `${this.equipement?.id}`; // Récupère l'ID des paramètres de la route
    //   this.equipementService.getEquipByID(id).subscribe(data => {
    //     this.equipement = data;
    //   });
    // });
  }

  getEquip(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.equipementService.getEquipByID(id)
    .subscribe(equip => this.equipement = equip);
    // .subscribe(equip => {
    //   console.log('Equipement',equip);
    // })

  }

  save(): void {
    this.equipementService.updateEquip(this.equipement).subscribe(response => {
      console.log('Mis à jour avec succès', response);
        this.msg='Mis à jour avec succès'
        this.isError = false;
        setTimeout(() => {
          this.router.navigate(['/equipement']);
        }, 2000); // Retard de 2 secondes
      }), (error: any) => {
        console.error('Error lors la mise à jour ', error);
        this.msg='Error lors la mise à jour ';
        this.isError =true;
        setTimeout(() => {
          this.msg = '';
        }, 2000); // Afficher le message d'erreur pendant 2 secondes
      }

  }

}
