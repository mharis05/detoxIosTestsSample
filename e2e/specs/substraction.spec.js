var actions = require('../utils/actions')

testData = {
  "Single Digit": {
    resultType: "Single Digit, positive",
    operandOne: 9,
    operandTwo: 3,
  },
  "Single Digits": {
    resultType: "Single Digit, negative",
    operandOne: 1,
    operandTwo: 3
  },
  "Multiple Digits": {
    resultType: "Multiple Digit, positive",
    operandOne: 199,
    operandTwo: 98
  },
  "Floating Point": {
    resultType: "Floating point",
    operandOne: 14.5,
    operandTwo: 3.9
  }
}

describe('Substraction Operations', function () {

  for (let [key, operands] of Object.entries(testData)) {
    it(`Performs substraction using ${key} numbers, producing a ${operands.resultType} number`, async () => {
      await actions.performBaseOperation(operands.operandOne, operands.operandTwo, actions.operations.SUBSTRACTION)
      await expect(await actions.getDisplayText()).toHaveText((operands.operandOne - operands.operandTwo).toString());
    })
  }

})