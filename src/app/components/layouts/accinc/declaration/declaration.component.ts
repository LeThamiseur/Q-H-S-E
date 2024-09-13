import { Component, Input } from '@angular/core';
import { Accinc } from '../../../../models/accinc';
import { AccincService } from '../../../../services/accinc.service';
import { ActivatedRoute } from '@angular/router';
import { GenPdfService } from '../../../../services/gen-pdf.service';
// import html2pdf from 'html2pdf.js'

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrl: './declaration.component.css'
})
export class DeclarationComponent {

  @Input() accinc!: Accinc;

  constructor(private accincservice: AccincService, private route: ActivatedRoute, private genPdf : GenPdfService){}

  ngOnInit(): void {
    this.getAcc();

    // this.route.params.subscribe(params => {
    //   const id = `${this.accinc.id}`; // Récupère l'ID des paramètres de la route
    //   this.accincservice.getAccincByID(id).subscribe(data => {
    //     this.accinc = data;
    //   });
    // });
  }

  getAcc(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.accincservice.getAccincByID(id)
      .subscribe(accinc => this.accinc = accinc);
  }

  // download function
  downloadForm() {
    this.genPdf.generatePdf('pdfContent',`declaration ${this.accinc?.type}`);

  }
}
