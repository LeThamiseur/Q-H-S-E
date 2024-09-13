import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../../../guard/auth.guard';

const routes: Routes = [
  {
    path:'home', component : HomeComponent,  canActivate: [AuthGuard.canActivate]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
