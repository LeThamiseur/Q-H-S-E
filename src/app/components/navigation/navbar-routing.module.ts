import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path:'home', component : HomeComponent
  // },
  // {
  //   path:'acc_inc', component: AccIncListComponent
  // },
  // {
  //   path: 'equipement', component: EquipListComponent
  // },
  // {
  //   path: 'SD', component: SituationListComponent
  // },
  // {
  //   path:'RP', component : RisquePComponent
  // },
  // {
  //   path: 'dotation', component: DotationListComponent
  // }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class NavBarRoutingModule { }
