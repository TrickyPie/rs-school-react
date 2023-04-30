/// <reference types="cypress" />
import { validateNotFutureDate, validateNotEmpty } from '../../src/components/form/form-utils';

describe('Validation Functions', () => {
  describe('validateNotFutureDate', () => {
    it('should return true if the selected date is not in the future', () => {
      const currentDate = new Date();
      const pastDate = new Date(
        currentDate.getFullYear() - 1,
        currentDate.getMonth(),
        currentDate.getDate()
      );

      cy.wrap(pastDate.toISOString()).then(validateNotFutureDate).should('eq', true);
    });

    it('should return an error message if the selected date is in the future', () => {
      const currentDate = new Date();
      const futureDate = new Date(
        currentDate.getFullYear() + 1,
        currentDate.getMonth(),
        currentDate.getDate()
      );

      cy.wrap(futureDate.toISOString())
        .then(validateNotFutureDate)
        .should(
          'eq',
          `Date must not be greater than the current one (${currentDate.toLocaleDateString()})`
        );
    });
  });

  describe('validateNotEmpty', () => {
    it('should return true if the value is not empty', () => {
      cy.wrap('some value').then(validateNotEmpty).should('eq', true);
    });

    it('should return an error message if the value is empty', () => {
      cy.wrap('').then(validateNotEmpty).should('eq', 'Please select a valid date');
    });
  });
});
