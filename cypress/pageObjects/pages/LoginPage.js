import {BasePage} from "../BasePage";

const USERNAME_FIELD = "[data-test=username]"
const PASSWORD_FIELD = "[data-test=password]"
const SUBMIT_BUTTON = ".submit-button"
const ERROR_MESSAGE = "[data-test=error]"
const CLOSE_ERROR_BUTTON = "[data-test=error] > button"



export class LoginPage extends BasePage{

    static openLogin(){
        this.openLoginPage()
    }

    static enterUsername(username){
        this.type(USERNAME_FIELD, username)
    }
    static enterPassword(password){
        this.type(PASSWORD_FIELD, password)
    }

    static clickButton(){
        this.click(SUBMIT_BUTTON)
    }

    static verifyErrorMessage(text){
        this.hasText(ERROR_MESSAGE,text)
    }
    static verifyErrorMessageIsVisible(){
        this.isVisible(ERROR_MESSAGE)
    }

    static closeAndVerifyNoErrorMessage (){
        this.click(CLOSE_ERROR_BUTTON)
        this.doesNotExist(ERROR_MESSAGE)
    }


}
