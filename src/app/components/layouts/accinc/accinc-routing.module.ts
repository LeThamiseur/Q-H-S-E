import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccListComponent } from './acc-list/acc-list.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { DeclarationFormComponent } from './declaration-form/declaration-form.component';
import { EditDeclarationComponent } from './edit-declaration/edit-declaration.component';

const routes: Routes = [
  {
    path:'evenements', component:AccListComponent
  },
  {
    path:'evenements/ficheD', component: DeclarationFormComponent
  },
  {
    path:'evenements/declaration/:id', component: DeclarationComponent
  },
  {
    path:'evenements/edit_declaration/:id', component: EditDeclarationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AccIncRoutingModule { }
