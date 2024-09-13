import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './components/accounts/account.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarModule } from './components/navigation/navbar.module';
import { HomeModule } from './components/layouts/home/home.module';
import { AccincModule } from './components/layouts/accinc/accinc.module';
import { DotationModule } from './components/layouts/dotation/dotation.module';
import { EquipementsModule } from './components/layouts/equipements/equipements.module';
import { NotFoundModule } from './components/layouts/not-found/not-found.module';
import { RpModule } from './components/layouts/rp/rp.module';
import { SituationDModule } from './components/layouts/situation-d/situation-d.module';
import { UniteTravModule } from './components/layouts/unite-trav/unite-trav.module';
import { PprModule } from './components/layouts/ppr/ppr.module';
import { PlanDModule } from './components/layouts/plan-d/plan-d.module';
import { HttpErrorInterceptor } from './core/interceptors/httpErrorInterceptors';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AccountModule,
    NavbarModule,
    HomeModule,
    AccincModule,
    PlanDModule,
    DotationModule,
    EquipementsModule,
    RpModule,
    SituationDModule,
    UniteTravModule,
    PprModule,
    NotFoundModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
