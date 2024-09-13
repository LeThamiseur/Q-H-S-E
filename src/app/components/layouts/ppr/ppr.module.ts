import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPprComponent } from './list-ppr/list-ppr.component';
import { PprRoutingModule } from './ppr-routing.module';
import { NavbarModule } from '../../navigation/navbar.module';
import { FormsModule } from '@angular/forms';
import { AddPprComponent } from './add-ppr/add-ppr.component';



@NgModule({
  declarations: [
    ListPprComponent,
    AddPprComponent
  ],
  imports: [
    CommonModule,
    PprRoutingModule,
    NavbarModule,
    FormsModule
  ]
})
export class PprModule { }
