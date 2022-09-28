import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-debitcard',
  templateUrl: './debitcard.component.html',
  styleUrls: ['./debitcard.component.scss']
})
export class DebitcardComponent implements OnInit {

  public hideAccNo = true;
  public accNo = false;
  cardList : any;

  constructor(private cardservice : CardService) { }

  ngOnInit(): void {
    this.cardList = this.cardservice.cardDetails;
  }

  showAccount(){
    if(this.hideAccNo == true){
      this.hideAccNo = false;
      this.accNo = true;
    }
    else {
      this.hideAccNo = true;
      this.accNo = false;
    }
  }

}
