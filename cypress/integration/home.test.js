describe('Home', () => {
    it('should test a sample test', () => {
        cy.visit("/");
        cy.contains("Todo list");
    })
})