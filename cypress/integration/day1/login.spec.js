import {LoginPage} from "../../pageObjects/pages/LoginPage";
import {ProductsPage} from "../../pageObjects/pages/ProductsPage";

describe("login test cases", () => {
    it("loging in with a valid user", ()=>{
        LoginPage.openLogin()
        LoginPage.enterUsername("standard_user")
        LoginPage.enterPassword("secret_sauce")
        LoginPage.clickButton()
        cy.get("#inventory_container").should("be.visible")

    })

    it("loging in with a INvalid user", ()=>{
        LoginPage.openLogin()
        LoginPage.enterUsername("gdshgfdsg")
        LoginPage.enterPassword("secret_sauce")
        LoginPage.clickButton()
        LoginPage.verifyErrorMessageIsVisible()
    })

    it("Logging in without any credentials", ()=>{
        LoginPage.openLogin()
        LoginPage.clickButton()
        LoginPage.verifyErrorMessage("Epic sadface: Username is required")
    })

    it("Logging in without any password", ()=>{
        LoginPage.openLogin()
        LoginPage.enterUsername("standard_user")
        LoginPage.clickButton()
        LoginPage.verifyErrorMessage("Epic sadface: Password is required")
    })

    it("Logging in with a locked user", ()=>{
        LoginPage.openLogin()
        LoginPage.enterUsername("locked_out_user")
        LoginPage.enterPassword("secret_sauce")
        LoginPage.clickButton()
        LoginPage.verifyErrorMessage("Epic sadface: Sorry, this user has been locked out.")
    })

    it("Closing the error message", ()=>{
        LoginPage.openLogin()
        LoginPage.enterUsername("hgfdshf")
        LoginPage.enterPassword("secret_sauce")
        LoginPage.clickButton()
        LoginPage.closeAndVerifyNoErrorMessage()
    })

    it("Without UI", ()=>{
        LoginPage.loginWithoutUi()
        ProductsPage.inventoryContainerIsVisible()
    })
})