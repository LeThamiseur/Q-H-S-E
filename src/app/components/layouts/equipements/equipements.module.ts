import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipementsRoutingModule } from './equipements-routing.module';
import { EquipListComponent } from './equip-list/equip-list.component';
import { NavbarModule } from '../../navigation/navbar.module';
import { AddEquipComponent } from './add-equip/add-equip.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { EditEquipComponent } from './edit-equip/edit-equip.component';



@NgModule({
  declarations: [
    EquipListComponent,
    AddEquipComponent,
    DetailComponent,
    EditEquipComponent
  ],
  imports: [
    CommonModule,
    EquipementsRoutingModule,
    NavbarModule,
    FormsModule
  ]
})
export class EquipementsModule { }
