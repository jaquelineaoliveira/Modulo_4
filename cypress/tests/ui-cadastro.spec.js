// / <reference types="cypress" />

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({
      // Request
      method: 'POST',
      path: '/api/users'

    }, {

      statusCode: 200,
      fixture: 'cadastro-com-sucesso.json'
    }).as('postUsers')

    cy.visit('register')
    cy.get('input[placeholder=Username]').type('Jaque1')
    cy.get('input[type=email]').type('jaque1@jaque.com')
    cy.get('input[type=password]').type('Teste@123')
    cy.get('button[type=submit]').click()
    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Cadastro com usuário existente', () => {
    cy.intercept({
      // Request
      method: 'POST',
      path: '/api/users'

    }, {

      statusCode: 422,
      fixture: 'cadastro-usuario-existente.json'
    }).as('postUsers')

    cy.visit('register')
    cy.get('input[placeholder=Username]').type('Jaque1')
    cy.get('input[type=email]').type('jaque1@jaque.com')
    cy.get('input[type=password]').type('Teste@123')
    cy.get('button[type=submit]').click()
    cy.contains('username has already been taken').should('be.visible')
  })
})
