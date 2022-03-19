//Example of Unit tests and our first test cases

function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0 ){
        return "fizzbuzz"
    }
    if(number % 3 === 0) {
        return "fizz"
    }
    if(number % 5 === 0) {
        return "buzz"
    }
    return "Not a multiple of 3 or 5"
}

function validateExpectedResult(array, expected) {
    array.forEach((number) => {
        expect(fizzBuzz(number)).to.equal(expected)
    })
}

describe("First day Fizz buzz test cases" , () => {

    before(() =>{
        cy.log("before")
    })
    beforeEach(() =>{
        cy.log("before each")
    })
    after(() =>{
        cy.log("after")
    })
    afterEach(() =>{
        cy.log("after each ")
    })

    it("Returns fizz if number is a multiple of 3" , () => {
        validateExpectedResult([3,6,9,12] , "fizz")
    })

    it("Returns fizz if number is a multiple of 5" , () => {
        validateExpectedResult([5,10,20,25] , "buzz")
    })

    it("Returns fizz if number is a multiple of 3 and 5" , () => {
        validateExpectedResult([15,30,45] , "fizzbuzz")
    })
})