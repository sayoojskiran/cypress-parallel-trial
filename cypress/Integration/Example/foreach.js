///<reference types="cypress"/>
require('cypress-xpath')
describe("My first keysdata",()=>{
    it("driving keys sets",()=>{
        cy.visit('https://www.google.co.in/')
        //cy.xpath('//input[@id="search"]').type('t shirt').type('{enter}')
        //cy.get('#search').type('t shirt').type('{enter}')
        cy.log("executeion demo")
    })
})