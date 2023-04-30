/// <reference types="cypress" />
/// <reference types="cypress" />

describe('Search', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render search results after clicking Enter in search input', () => {
    cy.get('.search-bar__input').type('mon{enter}');
    cy.get('[data-testid=card-test]').should('exist');
    cy.get('[data-testid=card-test]').should('have.length', 2);
  });

  it('should update searchValue on input change', () => {
    cy.get('[data-testid="search"] input').type('test');
    cy.get('[data-testid="search"] input').should(($input) => {
      expect($input).to.have.value('test');
    });
  });
});
