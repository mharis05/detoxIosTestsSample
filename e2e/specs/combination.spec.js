var actions = require('../utils/actions')

chainOperationStackedNoEqual = {
  baseOperation: {
    operation: "+",
    operandOne: 150,
    operandTwo: 3
  },
  stackOperations: [
    {
      operation: "-",
      operand: 7
    }
  ]
}

chainOperationStacked = {
  baseOperation: {
    operation: "/",
    operandOne: 150,
    operandTwo: 3
  },
  stackOperations: [
    {
      operation: "-",
      operand: 7
    },
    {
      operation: "+",
      operand: 41
    },
    {
      operation: "*",
      operand: 3
    }
  ]

}

describe('Combination of different Operations', function () {

  // Fails as the calculator does not suppport stacked operations without using = after each binary operation
  it('Performs a calculation with more than two operands WITHOUT using = in the middle of each like a + b - c', async () => {
    operations = chainOperationStackedNoEqual.baseOperation
    var expectedResult = operations.operandOne / operations.operandTwo
    await actions.performBaseOperationNoEquals(operations.operandOne, operations.operandTwo, operations.operation)

    for (let [key, operations] of Object.entries(chainOperationStackedNoEqual.stackOperations)) {
      expectedResult = await actions.resolveOperation[operations.operation](expectedResult, operations.operand)
      await actions.performStackedOperationNoEquals(operations.operand, operations.operation)
    }
    await actions.enterBtnSequence('=')
    
    await expect(await actions.getDisplayText()).toHaveText(expectedResult.toString());
  })

  it('Performs a calculation with more than two operands using = in the middle of each like a + b = <result> - c and so on', async () => {
    operations = chainOperationStacked.baseOperation
    var expectedResult = operations.operandOne / operations.operandTwo

    await actions.performBaseOperation(operations.operandOne, operations.operandTwo, operations.operation)
    await expect(await actions.getDisplayText()).toHaveText(expectedResult.toString());

    for (let [key, operations] of Object.entries(chainOperationStacked.stackOperations)) {
      await actions.performStackedOperation(operations.operand, operations.operation)

      expectedResult = await actions.resolveOperation[operations.operation](expectedResult, operations.operand)
      await expect(await actions.getDisplayText()).toHaveText(expectedResult.toString());
    }
  })

})