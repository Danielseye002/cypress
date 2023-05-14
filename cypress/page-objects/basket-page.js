import { Service } from "../services/service-functions";
const service = new Service;

export class Basket{

removeBtn =`input[value='Delete']`;
proceedToCheckoutBtn =`input[value='Proceed to checkout']`;

removeFromBasket(){
   service.click(this.removeBtn);
}

clickOnProceedToCheckout(){
    service.click(this.proceedToCheckoutBtn);
}

}