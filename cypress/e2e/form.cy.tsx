/// <reference types="cypress" />

import 'cypress-file-upload';

describe('CustomForm', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('should submit the form successfully', () => {
    cy.get('[data-testid="firstNameInput"]').type('John');
    cy.get('[data-testid="lastNameInput"]').type('Doe');
    cy.get('[data-testid="avatarInput"]').selectFile('cypress/fixtures/runall.png');
    cy.get('[data-testid="birthdayInput"]').type('1990-01-01');
    cy.get('[data-testid="region"]').select('Asia');
    cy.get('[data-testid="checkbox-label"]').click();
    cy.get('[data-testid="sunLvlRadio"]#little + label').click();
    cy.get('[data-testid="submitButton"]').click();
    cy.get('[data-testid="confirmationPopup"]').should('be.visible');
    cy.get('[data-testid="input-cards"]').within(() => {
      cy.get('[data-testid="input-card-avatar-card-0"]')
        .should('have.attr', 'src')
        .and('include', 'blob:');
      cy.get('[data-testid="input-card-name-card-0"]').should('have.text', 'John Doe');
      cy.get('[data-testid="input-card-birthday-card-0"]').should(
        'have.text',
        'Birthday: 1990-01-01'
      );
      cy.get('[data-testid="input-card-region-card-0"]').should('have.text', 'Region: Asia');
      cy.get('[data-testid="input-card-sunny-card-0"]').should(
        'have.text',
        'Your dream: Get enough sleep'
      );
    });
  });

  it('should display validation errors for invalid inputs', () => {
    cy.get('[data-testid="submitButton"]').click();
    cy.get('[data-testid="firstNameError"]').should(
      'have.text',
      'Name must contain at least 3 characters and be on english'
    );
    cy.get('[data-testid="lastNameError"]').should(
      'have.text',
      'Name must contain at least 3 characters and be on english'
    );
    cy.get('[data-testid="avatarError"]').should('have.text', 'Avatar is required');
    cy.get('[data-testid="birthdayError"]').should('have.text', 'Birthday is required');
    cy.get('[data-testid="regionError"]').should('have.text', 'Region is required');
    cy.get('[data-testid="promoError"]').should('have.text', 'This field is required.');
    cy.get('[data-testid="dreamError"]').should('have.text', 'This field is required.');
  });
});
