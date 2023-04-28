/// <reference types="cypress" />

describe('Search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should render search results after clicking Enter in search input', () => {
    cy.get('.search-bar__input').type('mon{enter}');
    cy.wait(7000);
    cy.get('[data-testid=card-test]').should('exist');
    cy.get('[data-testid=card-test]').should('have.length', 2);
  });

  it('should update searchValue on input change', () => {
    cy.visit('/');
    cy.get('[data-testid="search"] input').type('test').should('have.value', 'test');
  });
});

describe('Cards component', () => {
  it('should show "No results found" message if search term does not match any cards', () => {
    cy.visit('/');
    cy.get('[data-testid="search"] input').type('qwerty{enter}');
    cy.get('[data-testid="no-results-message"]').should('exist');
  });
});

describe('MainPage component', () => {
  it('should render search component', () => {
    cy.visit('/');
    cy.get('[data-testid="search"]').should('exist');
  });
});
