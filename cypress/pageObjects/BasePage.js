export class BasePage{

    static click(selector){
        cy.get(selector).click()
    }

    static hasText(selector, text){
        cy.get(selector).should("have.text",text)
    }

    static doesNotExist(selector){
        cy.get(selector).should("not.exist")
    }

    static isVisible(selector){
        cy.get(selector).should("be.visible")
    }

    static type(selector,text){
        cy.get(selector).type(text)
    }

    static openLoginPage(){
        cy.visit("https://www.saucedemo.com")
    }

    static loginWithoutUi(){
        cy.LogInWithCookies("standard_user")
    }

    static clickFirst(selector){
        cy.get(selector).first().click()
    }

}