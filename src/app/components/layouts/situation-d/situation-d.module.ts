import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailSituationComponent } from './detail-situation/detail-situation.component';
import { EditSituationComponent } from './edit-situation/edit-situation.component';
import { SituationListComponent } from './situation-list/situation-list.component';
import { SituationDRoutingModule } from './situation-d-routing.module';
import { NavbarModule } from '../../navigation/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetailSituationComponent,
    EditSituationComponent,
    SituationListComponent
  ],
  imports: [
    CommonModule,
    SituationDRoutingModule,
    NavbarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SituationDModule { }
