/// <reference types="cypress" />

const favouriteMovieStringified =
  '[{"title":"Johnny Stecchino","plot":"Good hearted but not very wordly-wise, Dante is happy driving the school bus for a group of mentally handicapped children, while feeling he is somehow missing out on life and love. So he is very excited when after nearly being knocked down by her car he meets Maria, who seems immediately enamoured of him. He is soon invited to her sumptuous Palermo villa, little suspecting that this is part of a plot. He bears an amazing likeness to Maria\'s stool-pigeon gangster husband and it would be convenient for them if the mobster, in the shape of Dante, was seen to be dead and buried.","poster":"https://m.media-amazon.com/images/M/MV5BZjU0MGNkYWUtMzkxMS00NWU4LWI5NjEtYTZkNWUyOTdiMzQwXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg","imdbID":"tt0102164"}]';

const minimumRequirementsDevices = () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
    /**
     * Let's add three movies into favourites
     * - Johnny Stecchino tt0102164
     * - Monsters, Inc. tt0198781
     * - The Last Samurai tt0325710
     */
    // cy.visit("/movies/tt0102164");
  });

  it("Favourite movies list shouls be empty ", () => {
    cy.visit("movies/favourites");
    expect(localStorage.getItem("favourite-movies")).to.be.null;
    cy.findByTestId("fav-list-component")
      .find("h1")
      .contains("Ooops seems you still have no added favouties movies.");
  });

  it("User should be able to add multiple movies into them favourites", () => {
    cy.visit("/movies/tt0102164");
    cy.findByTestId("add-favourites-component").click();
    cy.saveLocalStorage();
    cy.visit("/movies/tt0325710");
    cy.findByTestId("add-favourites-component").click();
    cy.saveLocalStorage();
    cy.visit("/movies/tt0198781");
    cy.findByTestId("add-favourites-component").click();
    cy.saveLocalStorage();
  });

  it("Favourite movies list should now not be empty ", () => {
    cy.visit("movies/favourites");

    cy.findAllByTestId("favourite-movie-card").should("exist");
    cy.findByText("Johnny Stecchino");
    cy.findByText("Monsters, Inc.");
    cy.findByText("The Last Samurai");
  });
};

context(
  "Desktop - Favourite movies page minimum requirements",
  {
    viewportWidth: 1536,
    viewportHeight: 960,
  },
  minimumRequirementsDevices
);
