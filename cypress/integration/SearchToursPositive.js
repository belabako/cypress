describe('Search tours functionality test (positive) of the Phptravels page', function () {
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.visit('https://www.phptravels.net/');
    });
    context('Search tours positive scan', function () {
        it('TS012, Search tours all valid data', function () {
            // Click on the Tours option on the searbox
            cy.get('[data-title="TOURS"] > a')
                .click();
            // Click on the Location element and type in Dubai
            cy.get('#s2id_autogen12 > .select2-choice > .select2-chosen')
                .click();
            cy.get('#select2-drop > .select2-search > .select2-input')   
                .type('Dubai');
            // Select the first element from the suggestion list
            cy.get(':nth-child(1) > .select2-result-sub > .select2-results-dept-1 > .select2-result-label')
                .click(); 
            //Store the selected element text in a variable 
            var firstElementText;
            cy.get('#s2id_autogen12 > .select2-choice > .select2-chosen').then(($selectedElement) => {
                firstElementText = $selectedElement.text();                
            });              
            // Modify the today date, adding one month to it
            var d = new Date();
            var caller = require('C:\\Users\\robert.pecz\\Documents\\CypressProjects\\PhpTravels\\cypress\\SupportJs\\DateModifier');
            var dateCaller = caller.ModifyDate(1, d);
            // Click on the tour type dropdown list
            cy.get('#s2id_tourtype > .select2-choice > .select2-chosen')
                .click();
            // Select the first element from the dropdown list
            cy.get(':nth-child(2) > .select2-result-label')
                .click();
            // Click on the search button
            cy.get(':nth-child(4) > .btn-danger')
                .click();
            // Assert that the url contains the city name
            cy.url()
                .should('contain', 'dubai');
            // Assert the blue Ribbon first line equals the selected element from the location list
            cy.get('.ellipsis > span').should(($element) => {
                expect(firstElementText).to.eq($element.text());
            });
            // Assert the blue ribbon second line contains dubai
            cy.get('.mob-trip-info-head > .RTL')
                .should('contain', 'Dubai');           
        });
    });
});