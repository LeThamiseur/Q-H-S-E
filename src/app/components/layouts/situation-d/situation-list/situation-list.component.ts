import { Component, inject } from '@angular/core';
import { SituationD } from '../../../../models/situation-D';
import { RisqueP } from '../../../../models/RisqueP';
import { DangRiskService } from '../../../../services/dang-risk.service';
import { Router } from '@angular/router';
import { InterfaceSituationD, SharedService } from '../../../../core/store/shared.service';

@Component({
  selector: 'app-situation-list',
  templateUrl: './situation-list.component.html',
  styleUrl: './situation-list.component.css'
})
export class SituationListComponent {

  private readonly router = inject(Router);
  private readonly dangRiskSevice = inject(DangRiskService);
  private readonly sharedService = inject(SharedService);


  situationDList : SituationD [] =[];
  filteredSDList : SituationD [] = [];
  msg = ''


  ngOnInit(): void {
    this.dangRiskSevice.getDangRisk(this.situationDList).subscribe(data => {
      this.situationDList = data;
      this.filteredSDList = this.situationDList
    });
  }

  // Delete equipement
  delete(danger: SituationD): void {
    this.situationDList = this.situationDList.filter(sd => sd !== danger);
    this.dangRiskSevice.deleteDang(danger.id).subscribe();
    this.msg = "Danger Supprimé";
  };

  // filterResults(text: string) {
  //   if (!text) {
  //     this.filteredSDList=this.situationDList;
  //     return;
  //   }
  //   this.filteredSDList = this.situationDList.filter(
  //     danger => danger?.label.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
  //               danger?.description.toLocaleLowerCase().includes(text.toLocaleLowerCase())
  //   )
  // }

  createSituation(event:Event){
    event.stopPropagation();
    this.router.navigate(['/SD/nv_situation'])
  }
  editSituation(event:Event, id: string){
    event.stopPropagation();
    this.router.navigate(['/SD/edit_situ']);
    this.sharedService.situationDStore.set({
      ... new InterfaceSituationD(),
      situationId:id
    })
  }

  viewSituation(event:Event, id: string){
    event.stopPropagation();
    this.router.navigate(['/SD/detail_situ']);
    this.sharedService.situationDStore.set({
      ... new InterfaceSituationD(),
      situationId:id,
      viewMode : true
    })
  }

}

// import { Component } from '@angular/core';
// import { SituationD } from '../../../../models/situation-D';
// import { RisqueP } from '../../../../models/RisqueP';
// import { DangRiskService } from '../../../../services/dang-risk.service';
// import { TestModels } from '../../../../models/testModels';
// import { ZtestRisk } from '../../../../services/z_test.service';

// @Component({
//   selector: 'app-situation-list',
//   templateUrl: './situation-list.component.html',
//   styleUrl: './situation-list.component.css'
// })
// export class SituationListComponent {

//   situationDList : TestModels [] =[];
//   filteredSDList : SituationD [] = [];
//   msg = ''

//   constructor(private ztestrisk : ZtestRisk){}

//   ngOnInit(): void {
//     this.ztestrisk.getDangRisk(this.situationDList).subscribe(data => {
//       this.situationDList = data;
//       // this.filteredSDList = this.situationDList
//     });
//   }

//   // Delete equipement
//   delete(danger: TestModels): void {
//     this.situationDList = this.situationDList.filter(sd => sd !== danger);
//     this.ztestrisk.deleteDang(danger.id).subscribe();
//     this.msg = "Danger Supprimé";
//   };

//   filterResults(text: string) {
//     // if (!text) {
//     //   this.filteredSDList=this.situationDList;
//     //   return;
//     // }
//     // this.filteredSDList = this.situationDList.filter(
//     //   danger => danger?.libelle.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
//     //             danger?.description.toLocaleLowerCase().includes(text.toLocaleLowerCase())
//     // )
//   }

// }
