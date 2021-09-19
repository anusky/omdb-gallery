/// <reference types="cypress" />

const minimumRequirementsDevices = () => {
  before(() => {
    cy.visit("/404", { failOnStatusCode: false });
    //=> Test passes but does not test the HTTP code was 404
  });

  it("cy.document() - get the document object", () => {
    // https://on.cypress.io/document
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });

  it("cy.title() - get the title", () => {
    // https://on.cypress.io/title
    cy.title().should("include", "OMDB - Page not found");
  });

  it("404 page should contain a button to go back home", () => {
    cy.findByTestId("take-me-home-button").should("exist");
  });

  it("When users clicks the home button should be redirected to / ", () => {
    cy.findByTestId("take-me-home-button").click();

    cy.url().should("include", "/");
  });
};

context(
  "Desktop - Minimum requirements in 404 page",
  {
    viewportWidth: 1536,
    viewportHeight: 960,
  },
  minimumRequirementsDevices
);
