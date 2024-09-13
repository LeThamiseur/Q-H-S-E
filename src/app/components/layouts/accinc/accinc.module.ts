import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccIncRoutingModule } from './accinc-routing.module';
import { NavbarModule } from '../../navigation/navbar.module';
import { AccListComponent } from './acc-list/acc-list.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeclarationFormComponent } from './declaration-form/declaration-form.component';
import { EditDeclarationComponent } from './edit-declaration/edit-declaration.component';



@NgModule({
  declarations: [
    AccListComponent,
    DeclarationComponent,
    DeclarationFormComponent,
    EditDeclarationComponent,
  ],
  imports: [
    CommonModule,
    AccIncRoutingModule,
    NavbarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccincModule { }
