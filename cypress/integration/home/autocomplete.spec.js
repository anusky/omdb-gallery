/// <reference types="cypress" />

const minimumRequirementsDevices = () => {
  beforeEach(() => {
    cy.visit("/");
    cy.findByTestId("search-input-component")
      .find('[type="text"]')
      .click()
      .as("focusInput");

    /**
     * We will make tests with "Batman" which we know it contains results
     * in OMDB data base
     * Let's begin with some data searched
     */
    cy.get("@focusInput").type(`bat`);
  });

  it("When user clicks an item, a movie page should be shown", () => {
    cy.findByTestId("autocomplete-list-component")
      .find("ul li")
      .first()
      .click();
    cy.url().should("include", "/movies/");
    cy.findByTestId("moviecard-component").find("h1").contains("Bat");
  });

  it("When user presses `Down Arrow` key, first autocomplete solution should be active", () => {
    cy.get("@focusInput").type(`{downarrow}`);
    cy.findByTestId("autocomplete-list-component").should("exist");
    cy.findByTestId("listbox-option-0").should(
      "have.attr",
      "aria-selected",
      "true"
    );
  });
  it("By pressing `Enter` key, current movie page should be shown", () => {
    cy.get("@focusInput").type(`{downarrow}`);
    cy.findByTestId("listbox-option-0")
      .get("a")
      .invoke("attr", "href")
      .then((href) => {
        cy.get("@focusInput").type(`{enter}`);
        cy.url().should("include", href);
      });
  });
};

context(
  "Desktop - Minimum requirements in autocomplete component",
  {
    viewportWidth: 1536,
    viewportHeight: 960,
  },
  minimumRequirementsDevices
);
