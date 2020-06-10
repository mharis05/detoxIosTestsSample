var actions = require('../utils/actions')

testData = {
  "Single Digit": {
    operandOne: 5,
    operandTwo: 9,
  },
  "Single Digit, with One negative": {
    operandOne: -14,
    operandTwo: 3
  },
  "Multiple Digit": {
    operandOne: 145,
    operandTwo: 39
  },
  "Floating Point": {
    operandOne: 14.5,
    operandTwo: 3.9
  }
}

describe('Multiplication Operation Tests', function () {

  for (let [key, operands] of Object.entries(testData)) {
    it(`Performs multiplication of ${key} numbers`, async () => {
      await actions.performBaseOperation(operands.operandOne, operands.operandTwo, actions.operations.MULTIPLICATION)
      await expect(await actions.getDisplayText()).toHaveText((operands.operandOne * operands.operandTwo).toString());
    })
  }

})