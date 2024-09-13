import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    RegisterComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
  ]
})
export class AccountModule { }
