/// <reference types="cypress" />

const minimumRequirementsDevices = () => {
  before(() => {
    cy.visit("/");
  });
  beforeEach(() => {
    cy.findByTestId("search-input-component")
      .find('[type="text"]')
      .click()
      .as("focusInput");
  });

  it("Search input should exist", () => {
    cy.findByTestId("search-input-component").should("exist");
  });

  it("Typing between 0-1-2 characters should not take effect", () => {
    cy.get("@focusInput");
    cy.findByTestId("autocomplete-list-component").should("not.exist");

    cy.findByTestId("search-input-component").type(`b`);
    cy.findByTestId("autocomplete-list-component").should("not.exist");
    cy.findByTestId("search-input-component").type(`a`);
    cy.findByTestId("autocomplete-list-component").should("not.exist");
  });

  /**
   * We will make tests with "Batman" which we know it contains results
   * in OMDB data base
   */
  it("Typing 3 characters should make appear autocomplete component", () => {
    cy.get("@focusInput").clear().type(`bat`);
    cy.findByTestId("autocomplete-list-component", { timeout: 5000 }).should(
      "exist"
    );
  });

  it("Typing 3 characters should make appear MovieCardList component", () => {
    cy.get("@focusInput").clear().type(`bat`);
    cy.findByTestId("movie-card-list-container", { timeout: 5000 }).should(
      "exist"
    );
  });

  it("When pressing `enter` with input focused, autocomplete should hide", () => {
    cy.get("@focusInput").clear().type(`bat{enter}`);

    cy.findByTestId("autocomplete-list-component").should("not.exist");
  });

  it("When user focus input again, autocomplete should show", () => {
    cy.get("@focusInput");

    cy.findByTestId("autocomplete-list-component").should("exist");
  });

  it("When user clears the search input, autocomplete should hide", () => {
    cy.get("@focusInput").clear();

    cy.findByTestId("autocomplete-list-component").should("not.exist");
  });

  it("When user presses `Esc` key, autocomplete should hide", () => {
    cy.get("@focusInput").clear().type(`bat`);

    cy.findByTestId("autocomplete-list-component").should("exist");

    cy.get("@focusInput").clear().type(`{esc}`);
    cy.findByTestId("autocomplete-list-component").should("not.exist");
  });

  it("When user presses `Arrow Down` key, autocomplete should show", () => {
    cy.get("@focusInput").clear().type(`bat{esc}`);

    cy.findByTestId("autocomplete-list-component").should("not.exist");

    cy.get("@focusInput").type(`{downarrow}`);
    cy.findByTestId("autocomplete-list-component").should("exist");
  });

  it("When user presses `Arrow Up` key, autocomplete should show", () => {
    cy.get("@focusInput").clear().type(`bat{esc}`);

    cy.findByTestId("autocomplete-list-component").should("not.exist");

    cy.get("@focusInput").type(`{uparrow}`);
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
