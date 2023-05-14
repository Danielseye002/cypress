import { Service } from "../services/service-functions";
const service = new Service;

export class Common{

searchBar = `#twotabsearchtextbox`;
cookiesAcceptBtn = `#id='sp-cc-accept`;
todayDealBtn = `a[aria-label="Today's Deals"] span[class='nav-a-content']`;
deal = (index) => `.DealGridItem-module__dealItemDisplayGrid_e7RQVFWSOrwXBX4i24Tqg:nth-child(${index}) .DealImage-module__imageObjectFit_1G4pEkUEzo9WEnA3Wl0XFv`;
dealItem = (index) => `.a-list-normal:nth-child(${index}) .a-link-normal > .a-section`;


acceptCookies(){
   service.click(this.cookiesAcceptBtn);
}

searchThroughSearchBar(text){
    service.typeWithEnter(this.searchBar,text);
}

clickOnTodayDeal(){
   service.click(this.todayDealBtn);
}

selectDeal(index= 2){
   service.click(this.deal(index));
}

selectDealItem(index= 2){
   service.click(this.dealItem(index))
}

}