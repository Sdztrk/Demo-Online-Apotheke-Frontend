describe('SuccessfulPayment component', () => {
    beforeEach(() => {
      // Visit the page containing the SuccessfulPayment component
      cy.visit('http://localhost:3000/#/PaymentSuccess');
    });
  
    it('should display successful payment message with correct text', () => {
      // Check if the text "Vielen Dank! Die Zahlung war erfolgreich." is present
      cy.get('#successful-payment-message').should('contain', 'Vielen Dank! Die Zahlung war erfolgreich.');
    });
  
    it('should display "Zurück zum Einkaufen" button with correct text', () => {
      // Check if the button with text "Zurück zum Einkaufen" is present
      cy.get('#back-to-shopping-button').should('contain', 'Zurück zum Einkaufen');
    });
  });