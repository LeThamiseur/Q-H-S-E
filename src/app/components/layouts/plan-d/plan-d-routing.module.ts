import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanDComponent } from './plan-d.component';


const routes: Routes = [
  {
    path:'plan_action', component:PlanDComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PlanDRoutingModule { }
