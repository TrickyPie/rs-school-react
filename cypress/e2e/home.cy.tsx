/// <reference types="cypress" />

describe('MainPage component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render search component', () => {
    cy.get('[data-testid="search"]').should('exist');
  });
});
