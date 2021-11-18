/// <reference types="Cypress" />

describe("The login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  afterEach(() => {
    cy.logout();
  });

  it("should be able to log in", () => {
    cy.login("hei");
  });
});
