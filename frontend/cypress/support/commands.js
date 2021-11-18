// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("signup", (username) => {
  cy.get(".css-0 > .chakra-link").click();
  cy.get("#field-2").click().type(username);
  cy.get(".chakra-stack > .chakra-button").click();
  cy.get("#helloUser").contains(username).should("exist");
  cy.get(".css-1yb07p2 > .chakra-heading").click();
});

Cypress.Commands.add("login", (username) => {
  cy.get("#field-2").click().type(username);
  cy.get(".chakra-stack > .chakra-button").click();
  cy.get("#helloUser").contains(username).should("exist");
  cy.get(".css-1yb07p2 > .chakra-heading").click();
});

Cypress.Commands.add("logout", () => {
  cy.get("#logout").click();
  cy.get("#helloUser").contains("guest").should("exist");
});
