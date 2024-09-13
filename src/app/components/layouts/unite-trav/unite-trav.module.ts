import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniteTravRoutingModule } from './unite-trav-routing.module';
import { UnitTravListComponent } from './unit-trav-list/unit-trav-list.component';
import { NavbarModule } from '../../navigation/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUTComponent } from './add-ut/add-ut.component';
import { EditUTComponent } from './edit-ut/edit-ut.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';



@NgModule({
  declarations: [

    UnitTravListComponent,
      AddUTComponent,
      EditUTComponent,
      TasklistComponent,
      TaskAddComponent,
      TaskEditComponent
  ],
  imports: [
    CommonModule,
    UniteTravRoutingModule,
    NavbarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UniteTravModule { }
