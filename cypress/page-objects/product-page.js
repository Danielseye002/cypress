import { Service } from "../services/service-functions";
const service = new Service;

export class Product{

addToCartBtn = `#add-to-cart-button`;
checkoutBtn = `#sc-buy-box-ptc-button .a-button-input`;
goToBasket = `#sw-gtc .a-button-text`;
proceedToCheckoutBtn = `input[aria-labelledby="attach-sidesheet-checkout-button-announce"]`;
basketBtn = `#attach-sidesheet-view-cart-button .a-button-input`;

clickAddToCartBtn(){
   service.click(this.addToCartBtn);
}

clickCheckoutBtn(text){
    service.click(this.checkoutBtn);
}

clickGoToBasket(){
    service.click(this.goToBasket);
}

clickOnProceedToCheckout(){
    service.click(this.proceedToCheckoutBtn)
}


}