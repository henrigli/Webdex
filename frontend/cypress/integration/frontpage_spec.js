/// <reference types="Cypress" />

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("Pokemon page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("goes to the clicked pokemons page", () => {
    cy.get(".css-1i5moxg > :nth-child(1)").click();
    cy.get(".css-1jw1hn6").should("include.text", "Bulbasaur");
  });
});
