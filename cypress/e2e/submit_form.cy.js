describe("Positif - As a user, I can submit form Review Product ", function(){
  beforeEach(() => {
    cy.visit("https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u")
    cy.get('title:contains("Review our product")').should("contain.text", "Review our product")
  })

  it("verify valid input for submit form", function(){
    cy.get('input[data-automation-id="textInput"]').should('have.length', 3) 
    cy.get('input[data-automation-id="textInput"]').eq(0).type("Nanda Arsyinta")
    cy.get('input[data-automation-id="textInput"]').eq(1).type('089766554462')
    cy.get('input[data-automation-id="textInput"]').eq(2).type("Nanananana")
    cy.get('[aria-label="3 Star"]').click()
    cy.get("#DatePicker0-label").click()
    cy.get('[aria-label="23, November, 2023"]').click()
    cy.get("[data-automation-id='submitButton']").click()
    cy.get("[data-automation-id='saveAndEditButton']").should('be.visible')
  })

  it("verify submit form report abuse", function(){
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
}) 

describe("Negative - As a user, I cannot submit form Review Product ", function(){
  beforeEach(() => {
    cy.visit("https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u")
    cy.get('title:contains("Review our product")').should("contain.text", "Review our product")
  })
  it("verify can't submit when field name empty", function(){
    cy.get('input[data-automation-id="textInput"]').should('have.length', 3) 
    cy.get('input[data-automation-id="textInput"]').eq(0).invoke('val', '')
    cy.get('input[data-automation-id="textInput"]').eq(1).type('098766554462')
    cy.get('input[data-automation-id="textInput"]').eq(2).type("Nanananana")
    cy.get('[aria-label="1 Star"]').click()
    cy.get("#DatePicker0-label").click()
    cy.get('[aria-label="23, November, 2023"]').click()
    cy.get("[data-automation-id='submitButton']").click()
    cy.wait(1000)
    cy.get('[data-automation-id="validationError"]').should("contain.text", "This question is required.")
    cy.get('[data-automation-id="submitError"]').should("contain.text", "1 question(s) need to be completed before submitting: Question 1.")
    
  })

  it("verify can't submit form when all of field required empty", function(){
    cy.get('input[data-automation-id="textInput"]').should('have.length', 3) 
    cy.get('input[data-automation-id="textInput"]').eq(0).invoke('val', '')
    cy.get('input[data-automation-id="textInput"]').eq(1).invoke('val', '')
    cy.get('input[data-automation-id="textInput"]').eq(2).invoke('val', '')
    cy.get("[data-automation-id='submitButton']").click()
    cy.get('[data-automation-id="validationError"]').eq(0).should("contain.text", "This question is required.")
    cy.get('[data-automation-id="validationError"]').eq(1).should("contain.text", "This question is required.")
    cy.get('[data-automation-id="validationError"]').eq(2).should("contain.text", "This question is required.")
    cy.get('[data-automation-id="validationError"]').eq(3).should("contain.text", "This question is required.")
    cy.get('[data-automation-id="validationError"]').eq(4).should("contain.text", "This question is required.")
    cy.get('[data-automation-id="submitError"]').should("contain.text", "5 question(s) need to be completed before submitting: Question 1,Question 2,Question 3,Question 4,Question 5.")
  })

})

describe("Positive - As a user, I can verify clear form ", function(){
  beforeEach(() => {
    cy.visit("https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u")
    cy.get('title:contains("Review our product")').should("contain.text", "Review our product")
  })
  it("As a user, I can clearing form permanently erase any information have entered", function(){
    cy.get('input[data-automation-id="textInput"]').eq(0).type("Nana")
    cy.get('input[data-automation-id="textInput"]').eq(1).type('098766554462')
    cy.get('input[data-automation-id="textInput"]').eq(2).type("Nanananana")
    cy.get('[aria-label="3 Star"]').click()
    cy.get("#DatePicker0-label").click()
    cy.get('[aria-label="23, November, 2023"]').click()
    cy.get('[aria-label="More options"]').click()
  
    cy.get('[role="menuitem"]').eq(1).click()
    cy.get('div:contains("Clear Form")').should('be.visible')
    cy.get('button:contains("Clear Form")').click()

    // assertion
    cy.get('input[data-automation-id="textInput"]').eq(0).should("contain.value", "")
    cy.get('input[data-automation-id="textInput"]').eq(1).should("contain.value", "")
    cy.get('input[data-automation-id="textInput"]').eq(2).should("contain.value", "")
    cy.get('[role="radiogroup"]').eq(1).children().should('have.length', 5)
      .first()
      .should('not.have.attr', 'aria-checked', null)  
    cy.get('[data-automation-id="dateContainer"] > div > div').should("not.have.class","is-active")
    
  })


  it("verify cancelled clearing form permanently ", function(){
    cy.get('input[data-automation-id="textInput"]').should('have.length', 3) 
    cy.get('input[data-automation-id="textInput"]').eq(0).type("Nana")
    cy.get('input[data-automation-id="textInput"]').eq(1).type('098766554462')
    cy.get('input[data-automation-id="textInput"]').eq(2).type("Nanananana")

    let ratingClicked = false
    let datePickerClicked = false
    let dateClicked = false
    let moreOptionClicked = false

    cy.get('[aria-label="3 Star"]').click().then(() => { 
      ratingClicked = true
      cy.wrap(ratingClicked).should('be.true')
    })
    cy.get("#DatePicker0-label").click().then(() => { 
      datePickerClicked = true
      cy.wrap(ratingClicked).should('be.true')
    })
    cy.get('[aria-label="23, November, 2023"]').click().then(() => { 
      dateClicked = true
      cy.wrap(dateClicked).should('be.true')
    })
    cy.get('[aria-label="More options"]').click().then(() => { 
      moreOptionClicked = true
      cy.wrap(moreOptionClicked).should('be.true')
    })
  
    cy.get('[role="menuitem"]').eq(1).click()
    
    // assertion
    cy.get('input[data-automation-id="textInput"]').should('have.length', 3) 
    cy.get('input[data-automation-id="textInput"]').eq(0).should("have.value", "Nana")
    cy.get('input[data-automation-id="textInput"]').eq(1).should("have.value", "098766554462")
    cy.get('input[data-automation-id="textInput"]').eq(2).should("have.value", "Nanananana")
    
  })
})

describe("Positive - verify to Enable or Disable Immersive Reader", function(){
  beforeEach(() => {
    cy.visit("https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u")
    cy.get('title:contains("Review our product")').should("contain.text", "Review our product")
  })
  it("As a user, I can Enable immersicer reader in form ", function(){
    cy.get('[aria-label="More options"]').click()
    cy.get('[role="menuitem"]').should("have.length", 2)
    cy.get('#ImmersiveReaderMenu > div > div span:nth-child(2)').should("contain.text", "Enable Immersive Reader")
    cy.get('span:contains("Enable Immersive Reader")').click()
    //assert
    cy.get('[aria-label="Immersive Reader"]').eq(0).should("be.enabled")
    cy.get('[aria-label="Immersive Reader"]').eq(1).should("be.enabled")
    cy.get('[aria-label="Immersive Reader"]').eq(2).should("be.enabled")
    cy.get('[aria-label="Immersive Reader"]').eq(3).should("be.enabled")
    cy.get('[aria-label="Immersive Reader"]').eq(4).should("be.enabled")
    cy.get('[aria-label="Immersive Reader"]').eq(5).should("be.enabled")

  })

  it("As a user, I can Disable immersicer reader in form", function(){
    //precondition enable
    cy.get('[aria-label="More options"]').click()
    cy.get('[role="menuitem"]').should("have.length", 2)
    cy.get('#ImmersiveReaderMenu > div > div span:nth-child(2)').should("contain.text", "Enable Immersive Reader")
    cy.get('span:contains("Enable Immersive Reader")').click()
    //assertion enable
    cy.get('[aria-label="Immersive Reader"]').should("have.length", 6)
  cy.get('[aria-label="Immersive Reader"]').eq(0).should("be.enabled")
  cy.get('[aria-label="Immersive Reader"]').eq(1).should("be.enabled")
  cy.get('[aria-label="Immersive Reader"]').eq(2).should("be.enabled")
  cy.get('[aria-label="Immersive Reader"]').eq(3).should("be.enabled")
  cy.get('[aria-label="Immersive Reader"]').eq(4).should("be.enabled")
  cy.get('[aria-label="Immersive Reader"]').eq(5).should("be.enabled")

    cy.get('[aria-label="More options"]').click()
    cy.get('[role="menuitem"]').should("have.length", 2)
    cy.get('#ImmersiveReaderMenu > div > div span:nth-child(2)').should("contain.text", "Disable Immersive Reader")
    cy.get('span:contains("Disable Immersive Reader")').click()

    //assertion disable
    cy.get('#FormTitleId_EnableScreenReader').should("not.have.text")
    cy.get('#QuestionInfo_r9f62b2a1fbe746ab953326f6937d4e73').should("not.have.attr","button[aria-label='Immersive Reader']")
    cy.get('#QuestionInfo_r5c2dd5cf6732459894e3d1cb504c8110').should("not.have.attr","button[aria-label='Immersive Reader']")
    cy.get('#QuestionInfo_r8bc17b753f0048ecb03794ef45037bb7').should("not.have.attr","button[aria-label='Immersive Reader']")
    cy.get('#QuestionInfo_r9f97f2550332479a8fdd2914bd99bc1d').should("not.have.attr","button[aria-label='Immersive Reader']")
    cy.get('#QuestionInfo_r1abee94394494318b1e34a419838e56c').should("not.have.attr","button[aria-label='Immersive Reader']")
  })
})