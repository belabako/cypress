describe('Smoke test of the PhpTravels website header logo', function () {
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.visit('https://www.phptravels.net/');
    });
    context('SmokeTest HeaderLogo', function () {
        it('Click on the header logo', function () {
            cy.get('.col-md-4 > .navbar-brand > .logo')
                .click()
                .url()
                .should('eq', 'https://www.phptravels.net/');            
        });       
    });
});