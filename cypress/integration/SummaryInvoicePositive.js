describe('Summary Invoice functionality test (positive) of the Phptravels page', function () {
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.visit('https://www.phptravels.net/');
    });
    context('Summary Invoice positive scenario', function () {
        it('TS001, Booking Summary without extras and coupons', function () {
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
            // Click on the first result
            cy.get(':nth-child(1) > .wow > .col-md-8 > :nth-child(1) > .mt0 > a > b')
                .click();
            // Scroll to the first result of the avaiable rooms and click on the first result
            cy.get(':nth-child(1) > .wow > .col-md-8 > :nth-child(6) > .col-md-6 > .btn')
                .scrollIntoView()
                .click();
            // Type the first name
            cy.get('#guestform > :nth-child(1) > .form-group > .form-control')
                .type('Robert');
            // Type the last name
            cy.get('#guestform > :nth-child(2) > .form-group > .form-control')
                .type('Pecz');
            // Type the email
            cy.get(':nth-child(3) > .form-group > .form-control')
                .type('test@test.com');
            // Type the confirm email
            cy.get('#guestform > :nth-child(4) > .form-group > .form-control')
                .type('test@test.com');
            // Type the mobile number
            cy.get(':nth-child(6) > .form-group > .form-control')
                .type('1234567890');
            // Type the address
            cy.get(':nth-child(7) > .form-group > .form-control')
                .type('Random street 1');
            // Select Hungary from the country dropdown list
            cy.get('.select2-chosen')
                .click();
            cy.get(':nth-child(78) > .select2-result-label')
                .scrollIntoView()
                .click();
            // Type random string into the Notes / Additional field
            cy.get(':nth-child(10) > .form-group > .form-control')
                .type('Random random random random random random random random random done.');
            // Click on the confrim booking button
            cy.get(':nth-child(7) > .btn')
                .scrollIntoView()
                .click();
            // Assert that the user is on the invoice page
            cy.get('[style="font-size: 34px;text-transform:uppercase;font-weight: bold;"]', { timeout: 10000 })
                .should('text', 'Invoice');
        });
    });
});