var actions = require('../utils/actions')

testDataNonZero = {
  "Single Digit Numbers": {
    resultType: "Single Digit",
    operandOne: 6,
    operandTwo: 3,
  },
  "Multiple Digit Numbers": {
    resultType: "Floating point",
    operandOne: 61,
    operandTwo: 8
  }
}

testDataZero = {
  resultType: "Infinity",
  operandOne: 8,
  operandTwo: 0
}


describe('Division Operation Tests', function () {

  for (let [key, operands] of Object.entries(testDataNonZero)) {
    it(`Performs ${key} division operation that produces ${operands.resultType}`, async () => {
      await actions.performBaseOperation(operands.operandOne, operands.operandTwo, actions.operations.DIVISION)
      await expect(await actions.getDisplayText()).toHaveText((operands.operandOne / operands.operandTwo).toString());
    })
  }

  it('Performs division by zero', async () => {
    var operationData = testDataZero
    await actions.performBaseOperation(operationData.operandOne, operationData.operandTwo, actions.operations.DIVISION)
    await expect(await actions.getDisplayText()).toHaveText(operationData.resultType);
  })

})