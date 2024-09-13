import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarModule } from '../../navigation/navbar.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule
  ]
})
export class HomeModule { }
