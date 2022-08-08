describe('landingPage', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.intercept('GET', "https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=CQVz4qc29PYDruOh6NPKRzNMtIIYdLMZM589ut8w", { fixture: 'example.json' })
  })

  it('should take users to landing page', () => {
    cy.get("div")
    .should("have.class", "App")
  })

  it('should have a header', () => {
    cy.get(".greetingText")
    .contains("greetings, earthling")
  })  
  
  it('should render a sphere', () => {
    cy.get('canvas')
  })  
  
  it('should have a button', () => {
    cy.get('[href="/dashboard"]')
  })  
  
  it('should navigate user to the dashboard', () => {
    cy.get('[href="/dashboard"]').click()
    cy.get("div").should("be.visible")

  })
})