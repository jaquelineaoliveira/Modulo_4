// / <reference types="cypress" />

import articles from '../support/pages/articles'

describe('Articles', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })

  it('Cadastro de novo artigo com sucesso', () => {
    articles.acessarFormulario()
    articles.preencherFormulario()
    articles.submeterFormulario()
    articles.verificarArtigoCriado()
  })

  it('Logar sem passar pela tela de login ', () => {
    cy.request({
      url: 'https://api.realworld.io/api/users/login',
      method: 'POST',
      body: {
        user: {
          email: 'jaque1@jaque.com',
          password: 'Teste@123'
        }
      }
    }).then((response) => {
      //       console.log(response)
      console.log(response.body.user.token)

      window.localStorage.setItem('jwtToken', response.body.user.token)
    })

    cy.visit('/')
  })

  it.only('Cadastrar artigo sem logar via tela ', () => {
    articles.acessarFormulario()
    articles.preencherFormulario()
    articles.submeterFormulario()
    articles.verificarArtigoCriado()
  })
})
