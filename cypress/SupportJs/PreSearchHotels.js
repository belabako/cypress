export function PreconditionHotels(location) {
    // Click on the location textbox
    if (location) {
        cy.get('#s2id_autogen10 > .select2-choice > .select2-chosen')
            .click();
        // On the textfield, type Dubai

        cy.get('#select2-drop > .select2-search > .select2-input')
            .type(location);

        // Click on the suggested result
        cy.get('.select2-results-dept-1 > .select2-result-label')
            .click();
    }
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
    return dateCaller;
}