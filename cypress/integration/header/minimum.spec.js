/// <reference types="cypress" />

const minimumRequirementsDevices = () => {
  before(() => {
    cy.visit("/");
  });
  it("When user clicks `Favourites` link, favourites page should be loaded", () => {
    cy.findByTestId("header-component").findByText("Favourite Movies").click();
    cy.url().should("include", "/movies/favourites");
  });

  it("When user clicks `Home` link, home page should be loaded", () => {
    cy.findByTestId("header-component").findByText("Home").click();
    cy.url().should("include", "/");
  });
};

context(
  "Desktop - Minimum requirements in header component",
  {
    viewportWidth: 1536,
    viewportHeight: 960,
  },
  minimumRequirementsDevices
);
