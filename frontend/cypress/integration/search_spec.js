/// <reference types="Cypress" />

describe("Searchfiled", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("searches for pokemon", () => {
    cy.get("#field-4").type("Pika").should("have.value", "Pika");
    cy.get(".chakra-form-control > .chakra-button").click();
    cy.get(":nth-child(1) > .css-rmlqu9 > .css-1jw1hn6")
      .first()
      .should("include.text", "Pika");
  });
});
