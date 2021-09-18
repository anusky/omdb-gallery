/// <reference types="cypress" />

const minimumRequirementsDevices = () => {
  before(() => {
    cy.visit("/");
  });

  it("Search input should exist", () => {
    cy.findByTestId("search-input-component").should("exist");
  });

  it("Typing between 0-1-2 characters should not take effect", () => {
    cy.findByTestId("search-input-component").find("input").first().focus();

    cy.findByTestId("autocomplete-list-component").should("not.exist");
    cy.findByTestId("search-input-component").type(`b`);

    cy.findByTestId("search-input-component").type(`a`);

    cy.findByTestId("autocomplete-list-component").should("not.exist");
  });
  /**
   * We will make tests with "Batman" which we know it contains results
   * in OMDB data base
   */
  it("Typing 3 characters should make appear autocomplete component", () => {
    cy.findByTestId("search-input-component").clear().type(`bat`);
    cy.findByTestId("autocomplete-list-component").should("exist");
  });
};

context(
  "Desktop - Minimum requirements in search-input component",
  {
    viewportWidth: 1536,
    viewportHeight: 960,
  },
  minimumRequirementsDevices
);
