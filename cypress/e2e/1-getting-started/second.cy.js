describe('My First Test', () => {
    it('Visits the app root url', () => {
      cy.visit('https://online-apotheke.onrender.com') // Visit your app's root URL
      cy.contains('Arzneimittel') // Assuming this text is present on your home page
    })
  })