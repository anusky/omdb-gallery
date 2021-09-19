/// <reference types="cypress" />

const minimumRequirementsDevices = () => {
  before(() => {
    cy.visit("/");
  });

  it("cy.document() - get the document object", () => {
    // https://on.cypress.io/document
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });

  it("cy.title() - get the title", () => {
    // https://on.cypress.io/title
    cy.title().should("include", "OMBD Searcher App");
  });

  it("Home should contain a search input", () => {
    cy.findByTestId("search-input-component").should("exist");
  });

  it("When users go to /home should be redirected to / ", () => {
    cy.visit("/home");
    cy.url().should("include", "/");
  });
};

context(
  "Desktop - Minimum requirements in home page",
  {
    viewportWidth: 1536,
    viewportHeight: 960,
  },
  minimumRequirementsDevices
);
