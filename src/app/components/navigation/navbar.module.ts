import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarRoutingModule } from './navbar-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HorizontalbarComponent } from './horizontalbar/horizontalbar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HorizontalbarComponent
  ],
  imports: [
    CommonModule,
    NavBarRoutingModule
  ],
  exports : [
    SidebarComponent,
    HorizontalbarComponent
  ]
})
export class NavbarModule { }
