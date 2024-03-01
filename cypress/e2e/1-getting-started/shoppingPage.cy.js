describe('Checkout', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/#/ShoppingPage');
    });
  
    it('should display empty cart message when cart is empty', () => {
      cy.get('[data-testid=empty-cart]').should('be.visible');
    });
  
    it('should display checkout container when cart is not empty', () => {
      // You might need to add test data to your Redux store before running this test
      // to simulate a non-empty cart.
      // cy.window().its('__store__').invoke('dispatch', addToShoppingCard({/* test product */}));
      cy.get('[data-testid=checkout-container]').should('be.visible');
    });
  
    // Write more tests as needed
  });
  