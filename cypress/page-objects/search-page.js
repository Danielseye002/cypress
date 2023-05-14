import { Service } from "../services/service-functions";
const service = new Service;

export class Search{

item = (index) => `[data-image-index="${index}"]`;
keyword = `.a-color-state`;

clickOnItem(index = 1){
   service.click(this.item(index));
}

expectSearchKeyword(text){
     cy.get(this.keyword).should("have.text",`"${text}"`);
}


}