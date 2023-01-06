describe('Login', () => {
  it('Should see login page with title, description and video', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome to Track Fit');
    cy.contains('Track your health and fitness');
  });
});

export {};
