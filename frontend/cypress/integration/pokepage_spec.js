/// <reference types="Cypress" />

describe("Pokemon page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get(".css-1i5moxg > :nth-child(1)").click();
    cy.get(".css-1jw1hn6").should("include.text", "Arbok");
  });

  it("marks pokemon as favorite", () => {
    cy.get(".css-1u4cbqe > .chakra-button > .chakra-icon").click();
  });

  it("checks if favorite is added to profile", () => {
    cy.get('[href="/profile"] > .chakra-button').click();
    cy.get(".chakra-stack").contains("Arbok").should("exist");
  });
});
