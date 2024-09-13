import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotationListComponent } from './dotation-list/dotation-list.component';
import { AddDotationComponent } from './add-dotation/add-dotation.component';
import { DotationBackComponent } from './dotation-back/dotation-back.component';
import { EditDotationComponent } from './edit-dotation/edit-dotation.component';
import { VoirDotationComponent } from './voir-dotation/voir-dotation.component';


const routes: Routes = [
  {
    path:'dotation', component : DotationListComponent
  },
  {
    path:'dotation/nv_dotation', component : AddDotationComponent
  },
  {
    path:'dotation/retour_dotation', component : DotationBackComponent
  },
  {
    path:'dotation/edit_dotation/:id', component : EditDotationComponent
  },
  {
    path:'dotation/voir_dotation/:id', component : VoirDotationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DotationRoutingModule { }
