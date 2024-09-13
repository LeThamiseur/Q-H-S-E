import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanDRoutingModule } from './plan-d-routing.module';
import { PlanDComponent } from './plan-d.component';
import { NavbarModule } from '../../navigation/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlanDComponent,
  ],
  imports: [
    CommonModule,
    PlanDRoutingModule,
    NavbarModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PlanDModule { }
