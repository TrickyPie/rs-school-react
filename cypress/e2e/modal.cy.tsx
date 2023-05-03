/// <reference types="cypress" />

describe('PlantModal', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should open the modal and display plant information when a card is clicked', () => {
    cy.get('[data-testid="card-test"]').first().click();
    cy.get('[data-testid="modal"]').should('be.visible');
    cy.get('[data-testid="plant-title"]').should('have.text', 'Money Tree Plant');
    cy.get('[data-testid="plant-description"]').should(
      'have.text',
      'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk.'
    );
    cy.get('[data-testid="plant-pet-friendly"]').should('exist');
    cy.get('[data-testid="plant-easy-care"]').should('exist');
    cy.get('[data-testid="plant-sun-icon"]').should('exist');
    cy.get('[data-testid="plant-bright-info"]').should(
      'have.text',
      'Thrives in bright indirect to medium light.'
    );
    cy.get('[data-testid="plant-water-icon"]').should('exist');
    cy.get('[data-testid="plant-water-info"]').should(
      'have.text',
      'Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.'
    );
    cy.get('[data-testid="close-button"]').click();
    cy.get('[data-testid="modal"]').should('not.exist');
  });

  it('should display the correct information when a different card is clicked', () => {
    cy.get('[data-testid="card-test"]').eq(1).click();
    cy.get('[data-testid="modal"]').should('be.visible');
    cy.get('[data-testid="plant-title"]').should('have.text', 'Snake Laurentii');
    cy.get('[data-testid="plant-description"]').should(
      'have.text',
      'The Snake Plant is a succulent plant characterized by its sword-like leaves with vibrant yellow edges. It is popular for its easy-going nature—it can tolerate drought and lower light—and its air-purifying capabilities.'
    );
    cy.get('[data-testid="plant-pet-friendly"]').should('not.exist');
    cy.get('[data-testid="plant-easy-care"]').should('exist');
    cy.get('[data-testid="plant-sun-icon"]').should('exist');
    cy.get('[data-testid="plant-bright-info"]').should(
      'have.text',
      'Thrives in medium to bright indirect light, but can tolerate low indirect light.'
    );
    cy.get('[data-testid="plant-water-icon"]').should('exist');
    cy.get('[data-testid="plant-water-info"]').should(
      'have.text',
      'Water every 2-3 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.'
    );
  });

  it('should call closeModal function when the modal wrapper is clicked', () => {
    cy.get('[data-testid="card-test"]').eq(1).click();
    cy.get('[data-testid="modal"]').click({ force: true });
    cy.get('[data-testid="modal"]').should('not.exist');
  });
});
