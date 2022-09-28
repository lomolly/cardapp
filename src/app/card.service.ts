import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cardDetails = [
    { cardNo: '5399789789787', cardHolder : 'Tolani Blank', expiryDate : '02/09/2024', cvv: 319},
    { cardNo: '4399789789787', cardHolder : 'Folakemi Clerk', expiryDate : '04/09/2024', cvv: 345},
    { cardNo: '39996789789787', cardHolder : 'James Balogun', expiryDate : '05/09/2024', cvv: 224},
    { cardNo: '5399789789787', cardHolder : 'Mike Obi', expiryDate : '02/09/2024', cvv: 198},
    { cardNo: '3999789789787', cardHolder : 'Emmanuel Ese', expiryDate : '06/09/2024', cvv: 665},
    { cardNo: '3999789789787', cardHolder : 'Eniola Komolafe', expiryDate : '10/09/2024', cvv: 712},
  ]

  constructor() { }

  getCardDetails(){
    this.cardDetails;
  }

}
