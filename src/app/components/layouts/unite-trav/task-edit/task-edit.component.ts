import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniteTravService } from '../../../../services/unite-trav.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UTrav } from '../../../../models/u-trav';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  form!: FormGroup;
  workUnits: UTrav[] = [];
  msg = '';
  isError = false;
  errorMsg: any[] = [];
  taskId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private uTService: UniteTravService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id')!;
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      workUnitId: ['', Validators.required]
    });

    this.uTService.getUniteTravail().subscribe({
      next: (response) => {
        this.workUnits = response;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des unités de travail', error);
      }
    });

    this.uTService.getTaskByID(this.taskId).subscribe({
      next: (task) => {
        this.form.patchValue({
          name: task.name,
          workUnitId: task.workUnitId
        });
      },
      error: (error) => {
        console.error('Erreur lors de la récupération de la tâche', error);
      }
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.uTService.updateTask( this.form.value).subscribe({
        next: () => {
          this.msg = 'Tâche modifiée avec succès';
          setTimeout(() => {
            this.router.navigate(['/uniteTrav/tasks']);
          }, 2000);
        },
        error: (error: HttpErrorResponse) => {
          this.form.markAllAsTouched();
          console.error('Erreur lors de la modification de la tâche', error);
          this.isError = true;
          this.errorMsg = error.error?.errors || [];
        }
      });
    }
  }
}
