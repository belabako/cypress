describe('Smoke test of the PhpTravels website header logo', function () {
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.visit('https://www.phptravels.net/');
    });
    context('SmokeTest HeaderLogo', function () {
        it('Click on the header logo', function () {
            Test();            
        });       
    });
});
function Test() {
    cy.log("Hello World");
}