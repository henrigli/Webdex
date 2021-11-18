/// <reference types="Cypress" />

function makeUsername() {
  return Math.random().toString(36).substring(2);
}

describe("The login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  afterEach(() => {
    cy.logout();
  });

  it("should be able to sign up", () => {
    cy.get(".chakra-link").click();
    cy.signup(makeUsername());
  });
});
