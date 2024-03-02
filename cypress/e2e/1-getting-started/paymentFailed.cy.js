describe('PaymentFailed component', () => {
    beforeEach(() => {
      // Visit the page containing the PaymentFailed component
      cy.visit('/PaymentFailed');
    });
  
    it('should display payment failed message with correct text', () => {
      // Check if the text "Oops! Die Zahlung ist fehlgeschlagen." is present
      cy.get('#payment-failed-message').should('contain', 'Oops! Die Zahlung ist fehlgeschlagen.');
    });
  
    it('should display payment failed description with correct text', () => {
      // Check if the text "Bitte überprüfen Sie Ihre Zahlungsinformationen und versuchen Sie es erneut." is present
      cy.get('#payment-failed-description').should('contain', 'Bitte überprüfen Sie Ihre Zahlungsinformationen und versuchen Sie es erneut.');
    });
  
    it('should display "Zurück zum Einkaufen" button with correct text', () => {
      // Check if the button with text "Zurück zum Einkaufen" is present
      cy.get('#back-to-shopping-button').should('contain', 'Zurück zum Einkaufen');
    });
  });
  