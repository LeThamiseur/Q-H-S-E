import { Component } from '@angular/core';
import { Dotation } from '../../../../models/dotation';
import { EquipementService } from '../../../../services/equipement.service';
// import { HistoDot } from '../../../../models/histoDot';

@Component({
  selector: 'app-dotation-list',
  templateUrl: './dotation-list.component.html',
  styleUrl: './dotation-list.component.css'
})
export class DotationListComponent {

  combinedData: any[] = [];
  errorMsg: string = '';
  successMsg: string = '';

  constructor(private equipementService: EquipementService) { }

  ngOnInit(): void {
    this.getCombinedData();
  }

  getCombinedData(): void {
    this.equipementService.getCombinedData().subscribe(data => {
      this.combinedData = data;
    });
  }

  onDeleteDotation(id: number): void {
    if (confirm('Êtes vous certain(e) de vouloir supprimer cette dotation?')) {
      this.equipementService.deleteDotation(id).subscribe(() => {
        this.successMsg = `Dotation with id=${id} deleted successfully.`;
        this.getCombinedData(); // Refresh the data after deletion
      }, error => {
        this.errorMsg = `Error deleting dotation with id=${id}.`;
      });
    }
  }
  

  // histoDot : HistoDot [] = [
  //   {
  //     id: 1,
  //     dotation:{
  //                 id:1,
  //                 service:'',
  //                 date: '2024/02/27',
  //                 nom_beneficiaire: 'B6K',
  //                 fonction: '',
  //                 metier: ''
  //     },
  //     equipementList: [
  //       {
  //         id:'1',
  //         abreviation: 'CP',
  //         designation: 'Casque de Protection',
  //         Utility:"Diminue l'impact d'un choc reçu à la tête",
  //         Quantite: 10 ,
  //       }
  //     ],
  //     dateR: ''
  //   },
  //   {
  //     id: 2,
  //     dotation:{
  //                 id:2,
  //                 service:'',
  //                 date: '2024/06/01',
  //                 nom_beneficiaire: 'PBHM',
  //                 fonction: '',
  //                 metier: ''
  //     },
  //     equipementList: [
  //       {
  //         id:'1',
  //         abreviation: 'CP',
  //         designation: 'Casque de Protection',
  //         Utility:"Diminue l'impact d'un choc reçu à la tête",
  //         Quantite: 10 ,
  //       }
  //     ],
  //     dateR : '2024/06/10'
  //   }
  // ]

  // histoDot : Dotation [] = [

  //             {
  //                     id: 1,
  //                     service:'',
  //                     date: '2024/02/27',
  //                     nom_beneficiaire: 'B6K',
  //                     fonction: '',
  //                     metier: '',
  //                     dateR: '',
  //                     equipmentList: [
  //                       {
  //                         id:'1',
  //                         abreviation: 'CP',
  //                         designation: 'Casque de Protection',
  //                         Utility:"Diminue l'impact d'un choc reçu à la tête",
  //                         Quantite: 10 ,
  //                       },
  //                       {
  //                       id: '2',
  //                       abreviation: "BS",
  //                       designation: "Bottes de protection",
  //                       Utility: "Protège les pieds des chocs ",
  //                       Quantite: 10
  //                       }

  //                     ],

  //                   },
  //                   {
  //                         id: 2,
  //                         service:'',
  //                         date: '2024/06/01',
  //                         nom_beneficiaire: 'PBHM',
  //                         fonction: '',
  //                         metier: '',
  //                         dateR : '2024/06/10',
  //                         equipmentList: [
  //                           {
  //                             id:'1',
  //                             abreviation: 'CP',
  //                             designation: 'Casque de Protection',
  //                             Utility:"Diminue l'impact d'un choc reçu à la tête",
  //                             Quantite: 10 ,
  //                           },
  //                           {
  //                             id: '3',
  //                             abreviation: "GP",
  //                             designation: "Gant de protection",
  //                             Utility: "Protège les mains des chocs, brulûre, corrosion",
  //                             Quantite: 15
  //                           }
  //                         ],

  //                       }
  // ]

}
