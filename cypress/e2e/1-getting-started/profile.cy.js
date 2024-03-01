
  describe('ProfilePage', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/#/Profile');
    });
  
    it('should display "Mein Profile" heading', () => {
      cy.contains('Mein Profile').should('be.visible');
    });
  
    it('should display "Upload Image" label', () => {
      cy.contains('label', 'Upload Image').should('be.visible');
    });
  
    it('should display "Address" input field', () => {
      cy.contains('label', 'Address').should('be.visible');
    });
  
    it('should display "Save" button', () => {
      cy.contains('Save').should('be.visible');
    });
  
    it('should display user data', () => {
      cy.get('[data-testid=profile-card]').should('be.visible');
    });
  
    // Add more tests for other elements and texts as needed
  
  });
  
  