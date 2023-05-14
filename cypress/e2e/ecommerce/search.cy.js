/// <reference types="cypress" />

const { Product } = require("../../page-objects/product-page");
const { Service } = require("../../services/service-functions");
const { Common } = require("../../page-objects/common-page");
const { Search } = require("../../page-objects/search-page");
const { Basket } = require("../../page-objects/basket-page");

// (npx cypress run)   command for mochawesome report
// npx cypress open   command for open cy brower

describe("Product Page", () => {
  const service = new Service();
  const search = new Search();
  const common = new Common();
  const product = new Product();
  const basket = new Basket();

  beforeEach('should visit "Home Page"', () => {
    service.navigate("https://www.amazon.co.uk/",30000);
    cy.get('#sp-cc-accept').click()
  });

  it("search product then add to cart then remove from cart", () => {
    common.searchThroughSearchBar("pen");
    search.clickOnItem(1);
    product.clickAddToCartBtn();
    product.clickGoToBasket();
    basket.removeFromBasket();
  });

  it("search product sandwich", () => {
    common.searchThroughSearchBar("sandwich");
    search.expectSearchKeyword("sandwich");
  });

  it("select product from today deal", () => {
    common.searchThroughSearchBar("pen");
    common.clickOnTodayDeal()
    common.selectDeal(2);
    common.selectDealItem(3);
    product.clickAddToCartBtn();
    product.clickOnProceedToCheckout();
  });


});
