/// <reference types="cypress" />

const minimumRequirementsDevices = () => {
  before(() => {
    /**
     * Let's play with Johnny Stecchino
     */
    cy.visit("/movies/tt0102164");
  });

  it("cy.document() - get the document object", () => {
    // https://on.cypress.io/document
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });

  it("cy.title() - get the title", () => {
    // https://on.cypress.io/title
    cy.title().should("include", "Johnny Stecchino");
  });

  it("Movie page should contain a breadcrumb", () => {
    cy.findByTestId("breadcrumb-component").should("exist");
  });
};

context(
  "Desktop - Minimum requirements in movie page",
  {
    viewportWidth: 1536,
    viewportHeight: 960,
  },
  minimumRequirementsDevices
);
