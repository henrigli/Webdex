/// <reference types="Cypress" />

describe("The login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  afterEach(() => {
    cy.logout();
  });

  it("should be able to log in", () => {
    cy.get(".chakra-link").click();
    cy.login("hei");
  });
});
