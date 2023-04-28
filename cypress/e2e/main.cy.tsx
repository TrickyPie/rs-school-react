/// <reference types="cypress" />

describe('App component', () => {
  it('navigates to the about page when the about link is clicked', () => {
    cy.visit('/');
    cy.get('a[href="/about-us"]').click();
    cy.url().should('include', '/about-us');
    cy.contains('h2', 'Page about us');
  });

  it('navigates to the home page when the home link is clicked', () => {
    cy.visit('/about-us');
    cy.get('a[href="/"]').click();
    cy.url().should('not.include', '/about-us');
    cy.contains('h2', 'Home');
  });

  it('navigates to the form page when the form link is clicked', () => {
    cy.visit('/');
    cy.get('a[href="/form"]').click();
    cy.url().should('include', '/form');
    cy.contains('h2', 'Form');
  });

  it('displays a 404 error page when an unknown path is entered', () => {
    cy.visit('/unknown');
    cy.contains('h2', 'Page Not Found');
  });
});
