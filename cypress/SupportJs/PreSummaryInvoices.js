export function PreConditionSummaryInvoice() {
    // Assert that the url containing the Dubai word
    cy.url()
        .should('contain', 'Dubai');
    // Assert that the top blue ribbon containing the Dubai word
    cy.get('.mob-trip-info-head > span', { timeout: 10000 })
        .should('contain', 'Dubai');
    // Click on the first result
    cy.get(':nth-child(1) > .wow > .col-md-8 > :nth-child(1) > .mt0 > a > b')
        .click();
    // Scroll to the first result of the avaiable rooms and click on the first result
    cy.get(':nth-child(1) > .wow > .col-md-8 > :nth-child(6) > .col-md-6 > .btn', { timeout: 10000 })
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
        .type('testRandom@test.com');
    // Type the confirm email
    cy.get('#guestform > :nth-child(4) > .form-group > .form-control')
        .type('testRandom@test.com');
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
}
