describe('Search flights functionality test (positive) of the Phptravels page', function () {
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.visit('https://www.phptravels.net/');
    });
    context('Search flights positive scan', function () {
        it('TS008, Search flights all valid data', function () {
            cy.get('.nav > :nth-child(2) > a')
                .click()
                .url()
                .should('eq', 'https://www.phptravels.net/flightst');
            cy.get('#travelstartIframe-dd7d2f33-38c3-4c69-baac-56d16157023b')                                       
        });
    });
});
