import { Component } from '@angular/core';

@Component({
  selector: 'memberships',
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.scss']
})

export class MembershipCompoent {
  elements: any = [
    {fee: "Individual", India: '₹​ 3000', Abroad: '$ 70'},
    {fee: "Institutional", India: '₹ ​8000', Abroad: '$ 150'},
  ];

  element: any = [
    {a:"Name",b:"OF BY AND FOR YOU"},
    {a:"Account No",b:"1168135000006163"},
    {a:"Type of Account",b:"Current"},
    {a:"Name of Bank	",b:"Karur Vysya Bank "},
    {a:"Branch",b:"Nagercoil   "},
    {a:"IFSC code",b:"KVBL0001168 "}
  ]
  
  headElements = ['MEMBERSHIP FEE', 'INDIA', 'ABROAD'];
  headElement = [];
 }



