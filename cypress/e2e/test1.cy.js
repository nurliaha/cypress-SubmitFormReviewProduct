describe("Positif - As a user, I can submit form Review Product ", function(){
  it("verify Access link test qa", function() {
    cy.visit("https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u") 
    cy.title().should('eq','Review our product')
  })

} ) 