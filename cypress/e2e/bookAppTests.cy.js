describe(
    "booksApp тест на экране ноутбука",
    {
      viewportHeight: 768,
      viewportWidth: 1366,
    },
    () => {
      beforeEach(() => {
        cy.visit("/");
      });
  
      it("Проверка отображения страницы", () => {
        cy.contains("Books list").should("be.visible");
      });
    })

    describe(
        "booksApp тест на экране смартфона",
        {
          viewportHeight: 640,
          viewportWidth: 360,
        },
        () => {
          beforeEach(() => {
            cy.visit("/");
          });
      
          it("Проверка отображения страницы", () => {
            cy.contains("Books list").should("be.visible");
          });
        })

describe('should login with valid data', () => {
    beforeEach(() => {
      
      cy.visit("/")
    })
  
    it('positive login', () => {
     
     cy.login(`test@test.com`, `test`)
      cy.contains('Добро пожаловать test@test.com').should(`be.visible`)
    })
    it('should not login if no password', () => {
        cy.login('test@test.com', null)
        cy.get('#pass').then((elements) => {
            expect(elements[0].checkValidity()).to.be.false
            expect(elements[0].validationMessage).to.be.eqls('Please fill in this field.')
        })
    })
    it('should add a book',() => {
        cy.login(`test@test.com`, `test`)
        cy.addBook('Вий', 'Гоголь')
        cy.contains('Вий').should(`be.visible`)
        cy.contains('Гоголь').should(`be.visible`)
    })
    it('should add to favorities', () => {
        cy.login(`test@test.com`, `test`)
        cy.contains('Вий')
        cy.get('[href="book/d7e512fa-cf9e-4062-8f80-434467c68a29"] > .h-100 > .card-footer > .btn').click()
        cy.get('h4').click()
        cy.contains('Вий')
    })
    it('should remove from favorities', () => {
        cy.login(`test@test.com`, `test`)
        cy.get('h4').click()
        cy.contains('Вий')
        cy.get('[href="book/d7e512fa-cf9e-4062-8f80-434467c68a29"] > .h-100 > .card-footer > .btn').click()
        cy.contains('Books list').click()
        cy.contains('Вий').should(`be.visible`)
})
})
