describe('LandingPage component', () => {

    beforeEach(() => {
        cy.visit('/'); // Adjust the route according to your application
      });
  
    it('should display the landing page title', () => {
      cy.get('[data-testid=landing-page-title]').should('contain', "Wo drückt's?");
    });

    
    //   it('should set focus when input is focused', () => {
    //     cy.get('[data-cy=":r1:"]').focus();
    //     cy.focused().should('have.attr', 'id', 'search-bar');
    //   });
    
    //   it('should lose focus when input is blurred', () => {
    //     cy.get('[data-cy="search-bar-input"]').focus().blur();
    //     cy.focused().should('not.exist');
    //   });

  });
  