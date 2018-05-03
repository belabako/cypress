describe('Login test functionality (negative) of the Phptravels page', function () {
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.visit('https://www.phptravels.net/');
    });
    context('Sign Up function negative scenario, invalid data', function () {
        it('TC001, no confirm password', function () {
            // Click on the My account dropdown list
            cy.get('.col-sm-8 > .navbar-side > #li_myaccount > .dropdown-toggle')
                .click();
            // Select the Sign up element
            cy.get('.col-sm-8 > .navbar-side > #li_myaccount > .dropdown-menu > :nth-child(2) > .go-text-right')
                .click();
            // Give a random string to the first name
            var firstName = makeid(6, true, false, false);
            cy.get('#headersignupform > :nth-child(3) > .form-control')
                .type(firstName);
            // Give a random string to the last name
            var lastName = makeid(6, true, false, false);
            cy.get(':nth-child(4) > .form-control')
                .type(lastName);
            // Give a random number to the mobile number
            cy.get(':nth-child(5) > .form-control')
                .type(makeid(11, false, true, false));
            // Give a random string to the email field in the next format string@string.com
            cy.get(':nth-child(6) > .form-control')
                .type(makeid(5, false, false, true));
            // Give the password 123456
            cy.get(':nth-child(7) > .form-control')
                .type('123456');          
            // Click on the sign up button
            cy.get('.signupbtn')
                .click();
            // Assert the error message
            cy.get('.alert > p')
                .should('text', 'The Password field is required.');
        });
         it('TC001, Wrong email format, too short password', function () {
             // Click on the My account dropdown list
             cy.get('.col-sm-8 > .navbar-side > #li_myaccount > .dropdown-toggle')
                 .click();
             // Select the Sign up element
             cy.get('.col-sm-8 > .navbar-side > #li_myaccount > .dropdown-menu > :nth-child(2) > .go-text-right')
                 .click();
             // Give a random string to the first name
             var firstName = makeid(6, true, false, false);
             cy.get('#headersignupform > :nth-child(3) > .form-control')
                 .type(firstName);
             // Give a random string to the last name
             var lastName = makeid(6, true, false, false);
             cy.get(':nth-child(4) > .form-control')
                 .type(lastName);
             // Give a random number to the mobile number
             cy.get(':nth-child(5) > .form-control')
                 .type(makeid(11, false, true, false));
             // Give a random string to the email field in the next format 'string'. 
             cy.get(':nth-child(6) > .form-control')
                 .type(makeid(5, true, false, false));
             // Give the password 12
             cy.get(':nth-child(7) > .form-control')
                 .type('12');
             // Confirm the password
             cy.get(':nth-child(8) > .form-control')
                 .type('12');
             //Click on the Sign up button
             cy.get('.signupbtn')
                 .click();
             // Assert the error message
             cy.get('.alert > p')
                 .should('text', 'The Email field must contain a valid email address.The Password field must be at least 6 characters in length.')
        }); 
        it('TC001, no matching password', function () {
            // Click on the My account dropdown list
            cy.get('.col-sm-8 > .navbar-side > #li_myaccount > .dropdown-toggle')
                .click();
            // Select the Sign up element
            cy.get('.col-sm-8 > .navbar-side > #li_myaccount > .dropdown-menu > :nth-child(2) > .go-text-right')
                .click();
            // Give a random string to the first name
            var firstName = makeid(6, true, false, false);
            cy.get('#headersignupform > :nth-child(3) > .form-control')
                .type(firstName);
            // Give a random string to the last name
            var lastName = makeid(6, true, false, false);
            cy.get(':nth-child(4) > .form-control')
                .type(lastName);
            // Give a random number to the mobile number
            cy.get(':nth-child(5) > .form-control')
                .type(makeid(11, false, true, false));
            // Give a random string to the email field in the next format string@string.com
            cy.get(':nth-child(6) > .form-control')
                .type(makeid(5, false, false, true));
            // Give the password 123456
            cy.get(':nth-child(7) > .form-control')
                .type('123456');
            // Confirm the password
            cy.get(':nth-child(8) > .form-control')
                .type('654321');
            // Click on the sign up button
            cy.get('.signupbtn')
                .click();
            // Assert the error message
            cy.get('.alert > p')
                .should('text', 'Password not matching with confirm password.');
        });
    });
    // Random string/number generator
    function makeid(number, isName, isMobile, isEmail) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var possibleNumber = "0123456789";
        var i = 0;

        if (isName === true) {
            i = 0;
            for (i = 0; i < number; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
        }
        if (isMobile === true) {
            i = 0;
            for (i = 0; i < number; i++) {
                text += possibleNumber.charAt(Math.floor(Math.random() * possibleNumber.length));
            }
        }
        if (isEmail === true) {
            i = 0;
            for (i = 0; i < number; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            text += "@";
            i = 0;
            for (i = 0; i < number; i++) {
                text += possibleNumber.charAt(Math.floor(Math.random() * possibleNumber.length));
            }
            text += ".com";
        }
        return text;
    }
});
