describe('LandingPage component', () => {
    beforeEach(() => {
      // Visit the landing page
      cy.visit('/');
    });
  
    it('should display the landing page title', () => {
      cy.get('[data-testid=landing-page-title]').should('contain', "Wo drückt's?");
    });
  });
  