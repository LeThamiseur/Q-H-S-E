import { Component, OnInit } from '@angular/core';
import { UTrav } from '../../../../models/u-trav';
import { UniteTravService } from '../../../../services/unite-trav.service';
import { Task } from '../../../../models/task';


@Component({
  selector: 'app-unit-trav-list',
  templateUrl: './unit-trav-list.component.html',
  styleUrl: './unit-trav-list.component.css'
})
export class UnitTravListComponent implements OnInit {

  uniteTravList: UTrav[] = [];
  taskList: Task[] = [];  // Pour stocker les tâches de l'unité sélectionnée
  selectedUnit: UTrav | null = null;  // Pour stocker l'unité sélectionnée
  msg ='';
  errorMsg ='';
  errMsg = '';

  constructor(private uniteTravService: UniteTravService) { }

  ngOnInit(): void {
    this.uniteTravService.getUniteTravail().subscribe(
    //   data => {
    //   this.uniteTravList = data;
    // }

    {
      next: uniteT => this.uniteTravList = uniteT,
      error: err => this.errMsg = err
    }

  );
  }

  // Afficher les tâches dans la modale
  showTasks(unite: UTrav): void {
    this.selectedUnit = unite;  // Stocke l'unité sélectionnée pour afficher son nom dans la modale
    this.uniteTravService.getTaskList().subscribe(data => {
      // Filtrer les tâches par l'unité sélectionnée
      this.taskList = data.filter(task => task.workUnitId === unite.id);
    });
  }

  // Delete UT
  delete(unite: UTrav): void {
    console.log('uniteID:',unite.id)
    if (confirm('Êtes vous certain(e) de vouloir supprimer cette unité?')) {
      // this.uniteTravList = this.uniteTravList.filter(ut => ut !== unite);
      this.uniteTravService.deleteUT(unite.id).subscribe({
        next: () => {
          this.msg = `Unité supprimée avec succès`;
          setTimeout(() => {
            this.msg = ``;
          }, 3000); // Retard de 3 secondes
        },
        error: (error) => {
          this.errorMsg = `Erreur de suppression`;
          setTimeout(() => {
            this.errorMsg = ``;
          }, 3000); // Retard de 3 secondes
        }
      });
    }
  }

}
