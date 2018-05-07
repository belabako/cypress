describe('Search hotels functionality test (positive) of the Phptravels page', function () {
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.visit('https://www.phptravels.net/');
    });
    context('Search hotels positive scenario', function () {
        it('TS004, Search Hotels all valid data', function () {
            // Click on the location textbox
            cy.get('#s2id_autogen10 > .select2-choice > .select2-chosen')
                .click();
            // On the textfield, type Dubai
            cy.get('#select2-drop > .select2-search > .select2-input')
                .type('Dubai');
            // Click on the suggested result
            cy.get('.select2-results-dept-1 > .select2-result-label')
                .click();
            // Modify the today date, adding one month to it
            var d = new Date();
            var caller = require('C:\\Users\\robert.pecz\\Documents\\CypressProjects\\PhpTravels\\cypress\\SupportJs\\DateModifier');
            var dateCaller = caller.ModifyDate(1, d);
            // Clearing the date field and type the modified date into the Check in datefield
            cy.get('#dpd1 > .form')
                .clear()
                .type(dateCaller)
                .click();
            // Modify the today date, adding two month to it
            dateCaller = caller.ModifyDate(2, d);
            // Clearing the date field and type the modified date into the Check out datefield
            cy.get('#dpd2 > .form')
                .clear()
                .type(dateCaller)
                .click();
            // Click on the search button
            cy.get(':nth-child(3) > .col-md-12 > .btn-danger')
                .click();
            // Assert that the url containing the Dubai word
            cy.url()
                .should('contain', 'Dubai');
            // Assert that the top blue ribbon containing the Dubai word
            cy.get('.mob-trip-info-head > span')
                .should('contain', 'Dubai');
            // Assert that the top blue ribbon containing the check out date
            cy.get('.mob-trip-info-head > div')
                .should('contain', dateCaller);
        });
        it('TS005, Search Hotels empty location', function () {
            // Modify the today date, adding one month to it
            var d = new Date();
            var caller = require('C:\\Users\\robert.pecz\\Documents\\CypressProjects\\PhpTravels\\cypress\\SupportJs\\DateModifier');
            var dateCaller = caller.ModifyDate(1, d);
            // Clearing the date field and type the modified date into the Check in datefield
            cy.get('#dpd1 > .form')
                .clear()
                .type(dateCaller)
                .click();
            // Modify the today date, adding two month to it
            dateCaller = caller.ModifyDate(2, d);
            // Clearing the date field and type the modified date into the Check out datefield
            cy.get('#dpd2 > .form')
                .clear()
                .type(dateCaller)
                .click();
            // Click on the search button
            cy.get(':nth-child(3) > .col-md-12 > .btn-danger')
                .click();
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
