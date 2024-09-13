import { Component } from '@angular/core';
import { Equipement } from '../../../../models/equipement';
import { EquipementService } from '../../../../services/equipement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-equip',
  templateUrl: './add-equip.component.html',
  styleUrl: './add-equip.component.css'
})
export class AddEquipComponent {

  formData: Equipement = new Equipement();
  msg = '';
  isError = false;

  constructor(private equipementService : EquipementService,
    private router : Router,
  ){}

  addEquip(){
    this.equipementService.addEquipement(this.formData).subscribe(response => {
      console.log('Data sent successfully', response);
      this.formData = new Equipement()
      this.msg = 'Equipement enregistré avec succes';
      this.isError = false;
      setTimeout(() => {
        this.router.navigate(['/equipement']);
      }, 2000); // Retard de 2 secondes
    }, (error:any) => {
      console.error('Error sending data', error);
      this.msg='Error lors la mise à jour de  l\'équipement';
      this.isError = true;
      setTimeout(() => {
        this.msg = '';
      }, 2000); // Afficher le message d'erreur pendant 2 secondes
    })
  };

}
