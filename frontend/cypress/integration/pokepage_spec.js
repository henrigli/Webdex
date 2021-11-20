/// <reference types="Cypress" />

function makeUsername() {
  return Math.random().toString(36).substring(2);
}

describe("Pokemon page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get(".chakra-link").click();
    cy.signup(makeUsername());
    cy.get(".css-1i5moxg > :nth-child(1)").click();
    cy.get(".css-1jw1hn6").should("include.text", "Bulbasaur");
  });

  it("marks pokemon as favorite and cheks of added to profile", () => {
    cy.get("#favoriteStar").click();
    cy.get('[href="/profile"] > .chakra-button').click();
    cy.get("#favorites").contains("Bulbasaur").should("exist");
  });
});
