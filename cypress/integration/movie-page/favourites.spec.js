/// <reference types="cypress" />

const favouriteMovieStringified =
  '[{"title":"Johnny Stecchino","plot":"Good hearted but not very wordly-wise, Dante is happy driving the school bus for a group of mentally handicapped children, while feeling he is somehow missing out on life and love. So he is very excited when after nearly being knocked down by her car he meets Maria, who seems immediately enamoured of him. He is soon invited to her sumptuous Palermo villa, little suspecting that this is part of a plot. He bears an amazing likeness to Maria\'s stool-pigeon gangster husband and it would be convenient for them if the mobster, in the shape of Dante, was seen to be dead and buried.","poster":"https://m.media-amazon.com/images/M/MV5BZjU0MGNkYWUtMzkxMS00NWU4LWI5NjEtYTZkNWUyOTdiMzQwXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg","imdbID":"tt0102164"}]';

const minimumRequirementsDevices = () => {
  before(() => {
    /**
     * Let's play with Johnny Stecchino
     */
    cy.visit("/movies/tt0102164");
  });

  it("Movie page should contain an add to fav button ", () => {
    cy.findByTestId("add-favourites-component").should("exist");
  });
  it("User should be able to add a movie into them favourites", () => {
    expect(localStorage.getItem("favourite-movies")).to.be.null;

    cy.findByTestId("add-favourites-component")
      .click()
      .should(() => {
        expect(localStorage.getItem("favourite-movies")).to.eq(
          favouriteMovieStringified
        );
      });
  });
  it("User should be able to remove a movie from them favourites", () => {
    cy.findByTestId("add-favourites-component")
      .click()
      .should(() => {
        expect(localStorage.getItem("favourite-movies")).to.eq("[]");
      });
  });
};

context(
  "Desktop - Favourite button section in movie page",
  {
    viewportWidth: 1536,
    viewportHeight: 960,
  },
  minimumRequirementsDevices
);
