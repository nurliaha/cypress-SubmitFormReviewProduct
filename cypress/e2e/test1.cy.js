describe("Positif - As a user, I can submit form Review Product ", function(){

  it("Verivy access form review product", function() {
    cy.visit("https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u") 

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
