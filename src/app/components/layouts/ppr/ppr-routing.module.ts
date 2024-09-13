import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPprComponent } from './list-ppr/list-ppr.component';
import { AddPprComponent } from './add-ppr/add-ppr.component';

const routes: Routes = [
  {
    path:'ppr', component: ListPprComponent
  },
  {
    path:'ppr/add_ppr', component: AddPprComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PprRoutingModule { }
