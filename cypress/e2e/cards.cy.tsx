/// <reference types="cypress" />

describe('Cards component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show "No results found" message if search term does not match any cards', () => {
    cy.get('[data-testid="search"] input').type('qwerty{enter}');
    cy.get('[data-testid="no-results-message"]').should('exist');
  });
});
