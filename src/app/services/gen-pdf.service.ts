import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class GenPdfService {

  constructor() { }

  generatePdf(elementId : string, fileName : string) {
    const data = document.getElementById(elementId);

    if (data) {
      html2canvas (data).then(canvas => {
        const imgWidth = 210;
        const pageHeight = 280;
        const marginLeft = 15;
        const marginTop = 42;
        const contentWidth = imgWidth - 2 * marginLeft;
        const contentHeight = pageHeight - 2 * marginTop;
        const imgHeigft = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeigft;
        // const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p','mm','a4');

        while (heightLeft >= 0) {
          const position = heightLeft-pageHeight >= 0 ? contentHeight: heightLeft;
          pdf.addImage(canvas, 'PNG', marginLeft, marginTop, contentWidth, position, '', 'FAST');

          heightLeft -= pageHeight;

          if (heightLeft >= 0) {
            pdf.addPage();
          }
        }

        pdf.save(`${fileName}.pdf`);
      });
    }
  }

}
