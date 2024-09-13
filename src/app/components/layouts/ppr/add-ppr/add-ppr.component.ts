import { Component } from '@angular/core';

@Component({
  selector: 'app-add-ppr',
  templateUrl: './add-ppr.component.html',
  styleUrls: ['./add-ppr.component.css']
})
export class AddPprComponent {
  project = {
    nomProjet: '',
    lieu: '',
    responsable: '',
    tel: '',
    duree: '',
    effectif: '',
    description: '',
    tasks: [
      {
        taskName: '',
        situationName: '',
        risks: '',
        measures: ''
      }
    ]
  };

  addTask() {
    this.project.tasks.push({
      taskName: '',
      situationName: '',
      risks: '',
      measures: ''
    });
  }

  removeTask(index: number) {
    this.project.tasks.splice(index, 1);
  }

  onSubmit() {
    console.log(this.project);
  }
}
