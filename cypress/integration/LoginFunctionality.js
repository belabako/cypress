describe('Forget password functionality', function () {
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.visit('https://www.phptravels.net/');
    });
    context('Login function, positive scan', function () {
        it('TS003', function () {
            /**/

            // Click on the My account dropdown list
            cy.get('.col-sm-8 > .navbar-side > #li_myaccount > .dropdown-toggle')
                .click(); 
            // Select the login button from the dropdown list
            cy.get('.col-sm-8 > .navbar-side > #li_myaccount > .dropdown-menu > :nth-child(1) > .go-text-right')
                .click();
            // Type the registered e-mail into the email field
            cy.get(':nth-child(1) > .form-control')
                .type('robert.pecz@accenture.com');
            // Type the password into the password field
            cy.get('.panel-body > :nth-child(2) > .form-control')
                .type('pGO485Wk');
            // Click on the Log in button
            cy.get('.wow > .btn')
                .click();
            // Assert the log in
            cy.get('.col-md-6.go-right > .RTL')
                .should('text', 'Hi, Robert Pecz');
        });
    });
    context('Login function, negative scan', function () {
        it('TS003, Invalid password', function () {
            // Click on the My account dropdown list
            cy.get('.col-sm-8 > .navbar-side > #li_myaccount > .dropdown-toggle')
                .click();
            // Select the login button from the dropdown list
            cy.get('.col-sm-8 > .navbar-side > #li_myaccount > .dropdown-menu > :nth-child(1) > .go-text-right')
                .click();
            // Type the registered e-mail into the email field
            cy.get(':nth-child(1) > .form-control')
                .type('robert.pecz@accenture.com');
            // Type the password into the password field
            cy.get('.panel-body > :nth-child(2) > .form-control')
                .type('123');
            // Click on the Log in button
            cy.get('.wow > .btn')
                .click();
            // Assert the error message
            cy.get('.alert')
                .should('text', 'Invalid Email or Password');
        });
        var email = 'robert.pecz@accenture.com'
        it('TS003, Forget password, valid email', function () {
            // Click on the My account dropdown list
            cy.get('.col-sm-8 > .navbar-side > #li_myaccount > .dropdown-toggle')
                .click();
            // Select the login button from the dropdown list
            cy.get('.col-sm-8 > .navbar-side > #li_myaccount > .dropdown-menu > :nth-child(1) > .go-text-right')
                .click();
            // Click on the Forget password button
            cy.get('.zoomInDown > :nth-child(3) > .btn')
                .click();
            // Scroll to the top of the page
            cy.scrollTo('top');
            // Type valid email into the forget password email textbox
            cy.get('#resetemail')
                .type(email);
            cy.get('#passresetfrm > div.input-group > span > button')
                .click();
            // Assert the response
            cy.get('.alert')
                .should('text', 'New Password sent to ' + email +', Kindly check email');
        });
        it('TS003, Forget password, invalid email', function () {
            // Click on the My account dropdown list
            cy.get('.col-sm-8 > .navbar-side > #li_myaccount > .dropdown-toggle')
                .click();
            // Select the login button from the dropdown list
            cy.get('.col-sm-8 > .navbar-side > #li_myaccount > .dropdown-menu > :nth-child(1) > .go-text-right')
                .click();
            // Click on the Forget password button
            cy.get('.zoomInDown > :nth-child(3) > .btn')
                .click();
            // Scroll to the top of the page
            cy.scrollTo('top');
            // Type valid email into the forget password email textbox
            cy.get('#resetemail')
                .type('notvalidemail');
            cy.get('#passresetfrm > div.input-group > span > button')
                .click();
            // Assert the response
            cy.get('.alert')
                .should('text', 'Email Not Found');
        });
    });
});