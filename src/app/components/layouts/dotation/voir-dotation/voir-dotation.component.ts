import { Component } from '@angular/core';
import { Dotation } from '../../../../models/dotation';
import { ActivatedRoute } from '@angular/router';
import { EquipementService } from '../../../../services/equipement.service';
import { GenPdfService } from '../../../../services/gen-pdf.service';

@Component({
  selector: 'app-voir-dotation',
  templateUrl: './voir-dotation.component.html',
  styleUrl: './voir-dotation.component.css'
})
export class VoirDotationComponent {

  dotation!: Dotation;
  equipements: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private equipementService: EquipementService,
    private pdfService :GenPdfService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.equipementService.getDotation().subscribe((dotations) => {
        this.dotation = dotations.find(d => d.id.toString() === id)!;
        this.equipementService.getEquipementList([]).subscribe((equipements) => {
          this.equipements = this.dotation.id_Equi.map(id => equipements.find(e => e.id === id));
        });
      });
    }
  }

  // download function
  downloadForm() {
    this.pdfService.generatePdf('pdfContent',`Fiche de dotation ${this.dotation.id}`);
    
  }

}
