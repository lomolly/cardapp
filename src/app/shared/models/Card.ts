export interface Card {
    cardNo: string;
    cardHolder: string;
    expiryDate : Date | string
    cvv : number
}