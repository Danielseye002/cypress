export class Service{

    navigate(httpRequest) {
        cy.visit(httpRequest).i;
      }

    typeWithoutEnter(elementLocator, text) {
        cy.get(elementLocator).type(text);
      }

      typeWithEnter(elementLocator,text) {
        cy.get(elementLocator,{timeout:100000}).type(text+"{enter}");
      }
    
      click(elementLocator) {
        cy.get(elementLocator, { timeout: 10000 }).should('be.visible');
        cy.get(elementLocator,{timeout:100000}).click({ multiple: true, force: true});
      }
    
      get(elementLocator) {
        return cy.get(elementLocator)
      }

      elementIsVisible(elementLocator) {
        cy.get(elementLocator).should('be.visible');
      }

      elementIsNotVisible(elementLocator) {
        cy.get(elementLocator).should('not.be.visible');
      }
      
}