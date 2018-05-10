describe('Search hotels functionality test (positive) of the Phptravels page', function () {
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.visit('https://www.phptravels.net/');
    });
    context('Search hotels positive scenario', function () {
        it('TS004, Search Hotels all valid data', function () {
            // Getting the precondition steps from a support js file and put the date into a var variable
            var searchWrapperTS004 = require('C:\\Users\\robert.pecz\\Documents\\CypressProjects\\PhpTravels\\cypress\\SupportJs\\PreSearchHotels');
            var dateReceiver = searchWrapperTS004.PreconditionHotels('Dubai');           
            // Assert that the url containing the Dubai word
            cy.url()
                .should('contain', 'Dubai');
            // Assert that the top blue ribbon containing the Dubai word
            cy.get('.mob-trip-info-head > span')
                .should('contain', 'Dubai');
            // Assert that the top blue ribbon containing the check out date
            cy.get('.mob-trip-info-head > div')
                .should('contain', dateReceiver);
        });
        it('TS005, Search Hotels empty location', function () {
            // Modify the today date, adding one month to it
            var searchWrapperTS004 = require('C:\\Users\\robert.pecz\\Documents\\CypressProjects\\PhpTravels\\cypress\\SupportJs\\PreSearchHotels');
            searchWrapperTS004.PreconditionHotels(''); 
            // Assert that the first result location text shouldn't equal the second result location text
            cy.get(':nth-child(1) > .wow > .col-md-8 > :nth-child(1) > .ellipsisFIX').then(($firstElement) => {
                const firstElementText = $firstElement.text();              
                cy.get(':nth-child(2) > .wow > .col-md-8 > :nth-child(1) > .ellipsisFIX').should(($secondElement) => {
                    expect($secondElement.text()).not.to.eq(firstElementText);
                });
            });           
        });
    });
});