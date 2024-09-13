import { Component, inject } from '@angular/core';
import { Task } from '../../../../models/task';
import { UniteTravService } from '../../../../services/unite-trav.service';
import { UTrav } from '../../../../models/u-trav';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {
  private readonly uTservice = inject(UniteTravService);

  taskList : Task[] = [];
  workUnits: UTrav[] = [];
  msg = "";
  errorMsg = "";
  isError = false;

  ngOnInit(): void {
    this.uTservice.getTaskList().subscribe(data => {
      this.taskList = data;
    });

    // Appel pour récupérer les unités de travail
    this.uTservice.getUniteTravail().subscribe({
      next: (response) => {
        this.workUnits = response;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des unités de travail', error);
      }
    });
  }

  getWorkUnitName(workUnitId: string): string {
    const unit = this.workUnits.find(u => u.id === workUnitId);
    return unit ? unit.name : 'Unité inconnue';
  }

  delete(task: Task): void {
    console.log(`taskId`, task.id)
    if (confirm('Êtes vous certain(e) de vouloir supprimer cette tâche?')){
      this.uTservice.deleteTask(task.id).subscribe({
        next:(response) => {
          console.log('Data deleted', response);
          this.msg = 'Tâche supprimée';
          setTimeout(() => {
            this.msg = '';
          }, 3000);
        },
        error: (error: any) => {
         console.log('Erreur de suppression', error);
        }

      })
    }
  }




}
