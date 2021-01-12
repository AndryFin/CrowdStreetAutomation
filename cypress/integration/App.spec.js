
describe("Account registration", () => {
  
   it("Creating an Account Test", () => {
	cy.visit("/");
	cy.contains("Create An Account").click({ force: true });
	   
        cy.log('Entering personal data');
	   
	cy.contains("Email").next().type(`${Cypress._.random(0, 1e6)}@gmail.com`); 
	cy.contains("First Name").next().type("Andrew");
	cy.contains("Last Name").next().type("Flowers");
	cy.contains("Create a Password").next().type("Password1234!");
	cy.contains("Confirm Password").next().type("Password1234!");
	cy.contains("Referred By").next().type("Internet");
	cy.contains("Phone Number").next().type("6507139090");
	cy.contains("Street Address").next().type("1239 Cindy st");
	cy.contains("City").next().type("Morrisville");
	cy.contains("State").next().click().contains("North Carolina (NC)").click();
	cy.contains("Zip").next().type("27560");
	cy.get('*[data-react-toolbox="radio"]').next().within(() => {
		cy.contains("Yes").click();
	});
 
	cy.log('Checking Agree to the terms checkboxes');
	   
	cy.contains("I agree to the Terms of Service.").prev().click();
	cy.contains("I understand that investment opportunities posted on this portal are speculative").prev().click();
	   
	cy.log('Click Captcha and Sign Up button');   
  
	cy.clickRecaptcha();   //this function is defined in commands.js file. 
	                       //Also for this function to work we need to set {chromeWebSecurity=false} in cypress.json
	cy.contains("Sign Up").click();
	   
	cy.log('Asserting there is "Congrats" popup window with new user firsname');   
  
	cy.contains("Congrats, Andrew!").should('be.visible');
   });   
});
