import { Component } from '@angular/core';

@Component({
  selector: 'publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationComponent {
  handleButtonClick(pdfFileName: string) {
    const pdfUrl = `../../assets/Publications-pdf/${pdfFileName}`;
    window.open(pdfUrl, '_blank');
  }

  tableData = [
    {
      name: 'PROCEEDINGS OF THE SECOND INTERNATIONAL CONFERENCE ON SOCIAL SCIENCES, EDUCATION & TECHNOLOGY',
      label: '../../assets/Publications-label/2nd-national-conf.jpeg',
      year: 2019,
      isbn: '978-81-963387-7-0',
      pdf: '2nd national conf SET.pdf',
    },
    {
      name: 'ADVANCES IN COMMERCE AND MANAGE',
      label: '../../assets/Publications-label/2nd-national-conf.jpeg',
      year: 2019,
      isbn: '978-93-90781-08-9',
      pdf: 'ADVANCES IN COMMERCE AND MANAGE - CS - ESN.pdf',
    },
    {
      name: 'COMMERCE AND MANAGEMENT IN DIGITAL ERA',
      label: '../../assets/Publications-label/2nd-national-conf.jpeg',
      year: 2019,
      isbn: '978-93-87756-71-7',
      pdf: 'COMMERCE AND MANAGEMENT IN DIGITAL ERA - CS.pdf',
    },
    {
      name: 'COMPUTER APPLICATION',
      label: '../../assets/Publications-label/2nd-national-conf.jpeg',
      year: 2019,
      isbn: '978-81-948096-9-2',
      pdf: 'COMPUTER APPLICATION - CS.pdf',
    },
    {
      name: 'DIGITALISATION IN INDIA',
      label: '../../assets/Publications-label/2nd-national-conf.jpeg',
      year: 2019,
      isbn: '978-93-87756-86-1',
      pdf: 'DIGITALISATION IN INDIA - CS.pdf',
    },
    {
      name: 'EMPEROR JOURNAL',
      label: '../../assets/Publications-label/2nd-national-conf.jpeg',
      year: 2019,
      isbn: '--------------------',
      pdf: 'EMPEROR JOURNAL.pdf',
    },
    {
      name: 'ENTREPRENEURSHIP AN INTRO',
      label: '../../assets/Publications-label/2nd-national-conf.jpeg',
      year: 2019,
      isbn: '978-93-87756-38-0',
      pdf: 'ENTREPRENEURSHIP AN INTRO - CS.pdf',
    },
    {
      name: 'ENTREPRENEURSHIP IDEAS',
      label: '../../assets/Publications-label/2nd-national-conf.jpeg',
      year: 2019,
      isbn: '978-81-953729-04',
      pdf: 'ENTREPRENEURSHIP IDEAS - CS.pdf',
    },
    {
      name: 'INDIAN SCENARIO OF SCHOOL AND COLLEGE',
      label: '../../assets/Publications-label/2nd-national-conf.jpeg',
      year: 2019,
      isbn: '978-81-942871-9-3',
      pdf: 'INDIAN SCENARIO OF SCHOOL AND COLLEGE - CS.pdf',
    },
    {
      name: 'INDUSTRIAL LAW',
      label: '../../assets/Publications-label/2nd-national-conf.jpeg',
      year: 2019,
      isbn: '978-81-948096-8-5',
      pdf: 'INDUSTRIAL LAW - CS.pdf',
    },
    {
      name: 'INNOVATIVE PRACTICES IN COMMERCE AND MANAGEMENT',
      label: '../../assets/Publications-label/2nd-national-conf.jpeg',
      year: 2019,
      isbn: '978-81-948096-4-7',
      pdf: 'INNOVATIVE PRACTICES IN COMMERCE AND MANAGEMENT - CS.pdf',
    },
    {
      name: 'INSTITUTIONAL FINANCE',
      label: '../../assets/Publications-label/2nd-national-conf.jpeg',
      year: 2019,
      isbn: '978-93-87756-36-6',
      pdf: 'INSTITUTIONAL FINANCE - CS.pdf',
    },
    {
      name: 'International Students Conference on Multiple Intelligences (ISCMI)',
      label: '../../assets/Publications-label/ISCMI.jpeg',
      year: 2022,
      isbn: '978-81-957692-1-6',
      pdf: 'ISCMI - CS ANDI.pdf',
    },
    {
      name: 'LEADERSHIP BEHAVIOUR',
      label: '../../assets/Publications-label/ISCMI.jpeg',
      year: 2022,
      isbn: '978-93-87756-85-4',
      pdf: 'LEADERSHIP BEHAVIOUR - CS.pdf',
    },
    {
      name: 'MULTIDISCIPLINARY INNOVATIONS',
      label: '../../assets/Publications-label/ISCMI.jpeg',
      year: 2022,
      isbn: '978-81-953729-1-1',
      pdf: 'MULTIDISCIPLINARY INNOVATIONS - CS.pdf',
    },
    {
      name: 'NEW EDUCATION POLICY',
      label: '../../assets/Publications-label/ISCMI.jpeg',
      year: 2022,
      isbn: '978-81-942871-9-3',
      pdf: 'NEW EDUCATION POLICY - Aug 2020.pdf',
    },
    {
      name: 'PARADIGM SHIFT IN BANKING',
      label: '../../assets/Publications-label/ISCMI.jpeg',
      year: 2022,
      isbn: '978-81-942153-7-0',
      pdf: 'PARADIGM SHIFT IN BANKING - CS.pdf',
    },
    {
      name: 'RECENT TRENDS IN ARTS & SCIENCE',
      label: '../../assets/Publications-label/ISCMI.jpeg',
      year: 2022,
      isbn: '978-81-942871-3-1',
      pdf: 'RECENT TRENDS IN ARTS & SCIENCE - Apr 2020.pdf',
    },
    {
      name: 'RESEARCHERS VIEW ON COVID',
      label: '../../assets/Publications-label/ISCMI.jpeg',
      year: 2022,
      isbn: '978-81-942871-5-5',
      pdf: 'RESEARCHERS VIEW ON COVID -CS.pdf',
    },
    {
      name: 'SOCIAL RESPONSIBILITY',
      label: '../../assets/Publications-label/ISCMI.jpeg',
      year: 2022,
      isbn: '978-93-87756-32-8',
      pdf: 'SOCIAL RESPONSIBILITY - CS.pdf',
    },
    {
      name: 'STATUS OF AGRICULTURE IN INDIA',
      label: '../../assets/Publications-label/ISCMI.jpeg',
      year: 2022,
      isbn: '978-81-942871-0-0',
      pdf: 'STATUS OF AGRICULTURE IN INDIA -CS.pdf',
    },
    {
      name: 'TRENDING FRONTIERS IN COMMERCE AND MANAGEMENT',
      label: '../../assets/Publications-label/ISCMI.jpeg',
      year: 2022,
      isbn: '978-81-942871-2-4',
      pdf: 'TRENDING FRONTIERS IN COMMERCE AND MANAGEMENT - Mar 2020.pdf',
    },
    {
      name: 'PROCEEDINGS OF THE HYBRID INTERNATIONAL CONFERENCE - BOSOWA - Ist MBIC - VOL - NUMBER -1',
      label: '../../assets/Publications-label/Proceeding-vol1-nomor1.jpeg',
      year: 2020,
      isbn: '978-81-963387-5-6',
      pdf: 'VOLUME 1 NOMOR 1.pdf',
    },
    {
      name: 'PROCEEDINGS OF THE HYBRID INTERNATIONAL CONFERENCE - BOSOWA - Ist MBIC - VOL - NUMBER -2',
      label: '../../assets/Publications-label/Proceeding-vol1-nomor2.jpeg',
      year: 2021,
      isbn: '978-81-963387-6-3',
      pdf: 'VOLUME 1 NOMOR 2.pdf',
    },
    {
      name: 'WOMEN EMPOWERMENT - ISBN Book',
      label: '../../assets/Publications-label/ISCMI.jpeg',
      year: 2022,
      isbn: '978-81-948096-5-4',
      pdf: 'WOMEN EMPOWERMENT - ISBN Book.pdf',
    },
    {
      name: 'WOMEN ISSUES AND CHALLENGES',
      label: '../../assets/Publications-label/ISCMI.jpeg',
      year: 2022,
      isbn: '978-81-948096-5-4',
      pdf: 'WOMEN ISSUES AND CHALLENGES - CS.pdf',
    },
  ];
}
