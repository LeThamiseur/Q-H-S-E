import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'signin', component: SigninComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
