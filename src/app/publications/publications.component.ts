import { Component } from '@angular/core';

@Component({
  selector: 'publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})

export class PublicationComponent { 
  handleButtonClick(pdfFileName: string) {
    const pdfUrl = `../../assets/Publications-pdf/${pdfFileName}`;
    window.open(pdfUrl, '_blank');
  }
}