import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipListComponent } from './equip-list/equip-list.component';
import { AddEquipComponent } from './add-equip/add-equip.component';
import { DetailComponent } from './detail/detail.component';
import { EditEquipComponent } from './edit-equip/edit-equip.component';


const routes: Routes = [
  {
    path:'equipement', component: EquipListComponent
  },
  {
    path:'equipement/addEquip', component: AddEquipComponent
  },
  {
    path:'equipement/detail/:id', component: DetailComponent
  },
  {
    path:'equipement/edit_equip/:id', component: EditEquipComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EquipementsRoutingModule { }
