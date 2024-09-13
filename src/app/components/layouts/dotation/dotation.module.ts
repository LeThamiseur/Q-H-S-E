import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotationRoutingModule } from './dotation-routing.module';
import { NavbarModule } from '../../navigation/navbar.module';
import { DotationListComponent } from './dotation-list/dotation-list.component';
import { AddDotationComponent } from './add-dotation/add-dotation.component';
import { DotationBackComponent } from './dotation-back/dotation-back.component';
import { EditDotationComponent } from './edit-dotation/edit-dotation.component';
import { VoirDotationComponent } from './voir-dotation/voir-dotation.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DotationListComponent,
    AddDotationComponent,
    DotationBackComponent,
    EditDotationComponent,
    VoirDotationComponent
  ],
  imports: [
    CommonModule,
    DotationRoutingModule,
    NavbarModule,
    FormsModule
  ]
})
export class DotationModule { }
