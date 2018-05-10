describe('Summary Invoice functionality test (positive) of the Phptravels page', function () {
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.visit('https://www.phptravels.net/');
    });
    context('Summary Invoice positive scenario', function () {
        it('TS001, Booking Summary without extras and coupons', function () {
            // Getting the precondition steps from a support js file and put the date into a var variable
            var searchWrapperTS001 = require('C:\\Users\\robert.pecz\\Documents\\CypressProjects\\PhpTravels\\cypress\\SupportJs\\PreSearchHotels');
            var dateReceiver = searchWrapperTS001.PreconditionHotels('Dubai');
            // Getting the redundant steps for invoice and executing
            var invoiceWrapperTS001 = require('C:\\Users\\robert.pecz\\Documents\\CypressProjects\\PhpTravels\\cypress\\SupportJs\\PreSummaryInvoices');
            invoiceWrapperTS001.PreConditionSummaryInvoice();
            // Click on the confrim booking button
            cy.get(':nth-child(7) > .btn')
                .scrollIntoView()
                .click();
            // Assert that the user is on the invoice page
            cy.get('[style="font-size: 34px;text-transform:uppercase;font-weight: bold;"]', { timeout: 10000 })
                .should('text', 'Invoice');
        });
        it('TS002, Booking Summary with extras and without coupon', function () {
            // Getting the precondition steps from a support js file and put the date into a var variable
            var searchWrapperTS001 = require('C:\\Users\\robert.pecz\\Documents\\CypressProjects\\PhpTravels\\cypress\\SupportJs\\PreSearchHotels');
            var dateReceiver = searchWrapperTS001.PreconditionHotels('Dubai');
            // Getting the redundant steps for invoice and executing
            var invoiceWrapperTS001 = require('C:\\Users\\robert.pecz\\Documents\\CypressProjects\\PhpTravels\\cypress\\SupportJs\\PreSummaryInvoices');
            invoiceWrapperTS001.PreConditionSummaryInvoice();
            // Assert if the user add one extra its appear on the items list and adding the price to the Total Amount
            // Put amount object into a const
            cy.get('#displaytotal').then(($amount) => {
                const totalAmount = $amount.text();
                cy.get(':nth-child(1) > :nth-child(4) > .switch-light > :nth-child(2) > :nth-child(2)')
                    .scrollIntoView()
                    .click();
                // Assert that the Total amount is changed
                cy.get('#displaytotal').should(($changedAmount) => {
                    expect($changedAmount.text()).not.to.eq(totalAmount);                                      
                });
            });
            // Put the extra name in a const
            cy.get(':nth-child(1) > :nth-child(2) > .item_cart').then(($name) => {
                const nameOfTheExtra = $name.text();
                // Assert that the name is on the amounts list
                cy.get('.allextras > :nth-child(1)').should(($extraInTheAmountList) => {
                    expect($extraInTheAmountList.text()).to.eq(nameOfTheExtra);
                });
            });
            //Assert if clicking the same extra it's disappear from the invoice list and deducted from the Total amount
            // Put amount object into a const
            cy.get('#displaytotal').then(($amount) => {
                const totalAmount = $amount.text();
                cy.get(':nth-child(1) > :nth-child(4) > .switch-light > :nth-child(2) > :nth-child(2)')
                    .scrollIntoView()
                    .click();
                // Assert that the Total amount is changed
                cy.get('#displaytotal').should(($changedAmount) => {
                    expect($changedAmount.text()).not.to.eq(totalAmount);
                });
            });

            // Put all of the extras  
            // Get the original total amount without extras
            cy.get('#displaytotal').then(($amount) => {
                const totalAmount = $amount.text();
            // Assert if the user add Romantic room decoration extra its appear on the items list 
            // Put object text into a const
            cy.get(':nth-child(1) > :nth-child(4) > .switch-light > :nth-child(2) > :nth-child(2)')
                .scrollIntoView()
                .click();
            cy.wait(5000);
            cy.get(':nth-child(1) > :nth-child(2) > .item_cart').then(($listRomantic) => {
                    const romantic = $listRomantic.text();
                    // Go the item cart and assert that the enabled extra is on the list
                    cy.get('.allextras > :nth-child(1)')
                        .scrollIntoView()
                        .should(($nameRomantic) => {                            
                            expect($nameRomantic.text()).to.eq(romantic);
                        });
            }); 
            // Assert if the user add Flower bouqet in room extra its appear on the items list 
            // Put object text into a const
            cy.get(':nth-child(2) > :nth-child(4) > .switch-light > :nth-child(2) > :nth-child(2)')
                .scrollIntoView()
                .click();
            cy.wait(5000);
            cy.get(':nth-child(2) > :nth-child(2) > .item_cart').then(($listFlower) => {
                const Flower = $listFlower.text();
                // Go the item cart and assert that the enabled extra is on the list
                cy.get('.col-xs-12 > .table > tbody > :nth-child(4) > :nth-child(1)')
                    .scrollIntoView()
                    .should(($nameFlower) => {                      
                        expect($nameFlower.text()).to.eq(Flower);
                    });
            });
            // Assert if the user add Champagne extra its appear on the items list 
            // Put object text into a const
            cy.get(':nth-child(3) > :nth-child(4) > .switch-light > :nth-child(2) > :nth-child(2)')
                .scrollIntoView()
                .click();
            cy.wait(5000);
            cy.get(':nth-child(3) > :nth-child(2) > .item_cart').then(($listChampagne) => {
                const Champagne = $listChampagne.text();
                // Go the item cart and assert that the enabled extra is on the list
                cy.get('tbody > :nth-child(5) > :nth-child(1)')
                    .scrollIntoView()
                    .should(($nameChampagne) => {                       
                        expect($nameChampagne.text()).to.eq(Champagne);
                    });
            });
            // Assert if the user add Bath wellness extra its appear on the items list 
            // Put object text into a const
            cy.get(':nth-child(4) > :nth-child(4) > .switch-light > :nth-child(2) > :nth-child(2)')
                .scrollIntoView()
                .click();
            cy.wait(5000);
            cy.get(':nth-child(4) > :nth-child(2) > .item_cart').then(($listBath) => {
                const Bath = $listBath.text();
                // Go the item cart and assert that the enabled extra is on the list
                cy.get('tbody > :nth-child(6) > :nth-child(1)')
                    .scrollIntoView()
                    .should(($nameBath) => {                        
                        expect($nameBath.text()).to.eq(Bath);
                    });
                });
                cy.get('#displaytotal').should(($amountWithExtras) => {
                    expect($amountWithExtras.text()).not.to.eq(totalAmount);
                });
            });
                                       
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
