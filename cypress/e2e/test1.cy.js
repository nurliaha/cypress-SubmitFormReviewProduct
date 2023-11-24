describe("Positif - As a user, I can submit form Review Product ", function(){

  it("Verify access form review product", function() {
    cy.visit("https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u") 

  })

  it("verify valid input for submit form", function(){
    cy.visit("https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u")
    cy.get('input[data-automation-id="textInput"]').should('have.length', 3) 
    cy.get('input[data-automation-id="textInput"]').eq(0).type("Nana")
    cy.get('input[data-automation-id="textInput"]').eq(1).type('098766554462')
    cy.get('input[data-automation-id="textInput"]').eq(2).type("Nanananana")
    cy.get('[aria-label="3 Star"]').click()
    cy.get("#DatePicker0-label").click()
    cy.get('[aria-label="23, November, 2023"]').click()
    cy.get("[data-automation-id='submitButton']").click()
    cy.get("[data-automation-id='saveAndEditButton']").should('be.visible')
  })

  it("verify report abuse", function(){
      cy.visit("https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u")
      cy.get('a:contains("Report abuse")').click()
      cy.get('[data-automation-value="reportAbuseViolationRadioGroup"]').should('have.length',3)
      cy.get("#Phishing").check()
      cy.get('span:contains("Copyright infringement")').should("be.visible")
      cy.get("#Other").check()
      cy.get("#Phishing").click()
      cy.get('[aria-labelledby="ReportAbuseId_CommentsTitle"]').type("Get all following siblings of each DOM element in a set of matched DOM elements up to, but not including, the element provided.")
      cy.get('button:contains("Submit")').should("be.visible")
      cy.get('button:contains("Submit")').click()
      cy.get('div:contains("Your report was submitted.")').should("contain.text", "Your report was submitted.")
      
    })
} ) 
