const el = require('./elements').ELEMENTS

const articleName = `Artigo de teste da Jaque${new Date().getTime()}`

class Articles {
  acessarFormulario () {
    cy.get(el.novoArtigo).click()
  }

  preencherFormulario () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('Descrição de teste da Jaque')
    cy.get(el.inputBody).type('Corpo do texto do artigo que está sendo criado pela Jaque')
    cy.get(el.inputTag).type('cypress_Jaque')
  }

  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  verificarArtigoCriado () {
    cy.contains(articleName).should('be.visible')
    cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
