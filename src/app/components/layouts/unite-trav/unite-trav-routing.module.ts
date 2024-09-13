import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitTravListComponent } from './unit-trav-list/unit-trav-list.component';
import { AddUTComponent } from './add-ut/add-ut.component';
import { EditUTComponent } from './edit-ut/edit-ut.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const routes: Routes = [
  {
    path:'uniteTrav', component : UnitTravListComponent
  },
  {
    path:'uniteTrav/add_UT', component : AddUTComponent
  },
  {
    path:'uniteTrav/edit_UT/:id', component : EditUTComponent
  },
  {
    path:'uniteTrav/tasks', component : TasklistComponent
  },
  {
    path:'uniteTrav/add_task', component : TaskAddComponent
  },
  {
    path:'uniteTrav/tasks/edit/:id', component : TaskEditComponent
  },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class UniteTravRoutingModule { }
