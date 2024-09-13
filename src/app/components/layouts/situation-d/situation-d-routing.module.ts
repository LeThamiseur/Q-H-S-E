import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSituationComponent } from './edit-situation/edit-situation.component';
import { SituationListComponent } from './situation-list/situation-list.component';
import { SituationResolverService } from '../../../core/resolvers/situation-resolver.service';



const routes: Routes = [
  {
    path:'SD', component : SituationListComponent
  },
  {
    path:'SD/nv_situation', component : EditSituationComponent
  },
  {
    path:'SD/detail_situ', component : EditSituationComponent,resolve:{
      situation: SituationResolverService
    }
  },
  {
    path:'SD/edit_situ', component : EditSituationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SituationDRoutingModule { }
