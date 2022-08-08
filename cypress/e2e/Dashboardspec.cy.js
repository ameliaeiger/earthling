describe('empty spec', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.intercept('GET', "https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=CQVz4qc29PYDruOh6NPKRzNMtIIYdLMZM589ut8w", { fixture: 'example.json' })
    cy.get('[href="/dashboard"]').click()
    cy.get("div").should("be.visible")
  })

// SEARCH TESTING
  it('should display the dashboard', () => {
    cy.get("div")
      .should("have.class", "dashboard")
  })

  it('should have an input field that accepts a date', () => {
      cy.get('#search').click().type("2022-08-06")
  })

  it('should have a clickable search button', () => {
    cy.get('.MuiButtonBase-root').click()
  })

  it('should display loading text after clicking search button', () => {
    cy.get('#searchButton').click()
    cy.get('#loadingText')
      .should("be.visible")
  })

  it('should display data', () => {
    cy.get('#search').click().type("2022-08-06")
    cy.get('#searchButton').click()
    cy.get('#searchForm')
      .should("be.visible")
      .contains("2022-08-06")
  })

 // NEO TESTING
  it('should display the NEO box', () => {
    cy.get(".neoDisplayText")
      .should("be.visible")
  })

  it('should have neo data', () => {
    cy.get(".neoDisplayText")
      .contains("9 near earth objects")
  })

  // TWITTER FUNCTIONALITY TESTING
  it('should have a clickable tweet button', () => {
    cy.intercept('GET', "https://syndication.twitter.com/settings?session_id=7ced3121ae5cf041b00ee0f750d1f49fa92496cb")
    cy.get('#twitter-widget-0')
      .should("be.visible")
      .click()
  })
})