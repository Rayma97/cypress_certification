describe('Test Scenario 1', () => {
    it('Slider Validation', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/')
        cy.get('a').contains('Drag & Drop Sliders').click()
        cy.get('#slider3').contains('Default value 15').should('be.visible')
        cy.get('#slider3 > div >input[type=range]')
            .then($el => $el[0].stepUp(80))
            .trigger('change')
        cy.xpath('//*[@id="rangeSuccess"]').should('have.value', 95)
    })

})