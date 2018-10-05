
describe('Can get to replicated control panel', function(){
    it('Can check the hostname', function() {
        cy.visit('https://ca.bearded.io:8800/settings')
        .get('#config-item-hostname').find('input')
        .type('{selectall}{backspace}')
        .type('8.8.8.8')
        .get('.test-button').contains('Check DNS').click()
        .get('.fa-check-square')
    })  
})

describe('It can interact with a custom field', function(){
    it ('Finds the field', function(){
        cy.visit('https://ca.bearded.io:8800/settings')
        .get('#config-item-field').find('input')
        .type('Can you see me?')
        .get('#config-item-anotherThing').find('input')
        .type('{selectall}{backspace}')
        .type('How about now')
    })
})

//The tests below are all failed attempts to load and interact with the dashboard page

describe('It can go to the another page', function(){
    it('Finds a navbar element', function() {
        cy.visit('https://ca.bearded.io:8800/settings')
        cy.get('li').contains('Audit Log').click()
    })  
})

// describe('It can interact with the dashboard', function(){
//     beforeEach(function(){
//         cy.visit('https://ca.bearded.io:8800/dashboard') 
//     })
//     it('The page loads', function(){ 
//         cy.get('.btn-default', { timeout: 10000 }).contains('Check Now').click()
//         .get('div').contains('Up to date')
//     })
// })


// describe('It can interact with the dashboard', function(){
//     beforeEach(function(){
//         cy.visit('https://ca.bearded.io:8800/dashboard')
//         cy.url().should('match', /dashboard/)
//         cy.server()
//         cy.route('/api/v1/hostinfo').as('hostinfo')
//         cy.route('/api/v1/session/ping').as('ping') 
//     })
//     it('The page loads', function(){ 
//         // cy.pause()
//         cy.wait('@hostinfo').wait('@ping').get('.btn-default').contains('Check Now').click()
//         .get('div').contains('Up to date')
//     })
// })

// describe('It can interact with the dashboard', function(){
//     beforeEach(function(){
//         cy.server()
//         cy.route('translations').as('getTranslations')
//         cy.route('hostinfo').as('getHostinfo')
//         cy.route('eventstream').as('eventstream')
//         cy.visit('https://ca.bearded.io:8800/dashboard') 
//     })
//     it('The page loads', function(){ 
//         cy.wait('@getTranslations')
//         cy.wait('@getHostinfo')
//         cy.wait('@eventstream')
//         cy.get('.btn-default').contains('Check Now').click()
//         cy.get('div').contains('Up to date')
//     })
// })