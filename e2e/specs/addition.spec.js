var actions = require('../utils/actions')
const data = require('../data/dataProvider')

describe('Addition Operations', function () {
  let operandsData = data.testData.addition

  for (let [key, operands] of Object.entries(operandsData)) {
    it(`Performs addition of two ${key} digit numbers:`, async () => {
      await actions.performOperation(operands.operandOne, operands.operandTwo, actions.operations.ADDITION)
      await expect(await actions.getDisplayText()).toHaveText((operands.operandOne + operands.operandTwo).toString());
    });
  }


  // it(`Performs addition of two single digit numbers:`, async () => {
  //   operands = operandsData.singleDigit
  //   await actions.performOperation(operands.operandOne, operands.operandTwo, actions.operations.ADDITION)
  //   await expect(await actions.getDisplayText()).toHaveText((operands.operandOne + operands.operandTwo).toString());
  // });

  // it('Performs addition of two Multiple digit numbers', async () => {
  //   operands = operandsData.multipleDigit
  //   await actions.performOperation(operands.operandOne, operands.operandTwo, actions.operations.ADDITION)
  //   await expect(await actions.getDisplayText()).toHaveText((operands.operandOne + operands.operandTwo).toString());
  // });

  // it('Performs addition involving Floating point numbers', async () => {
  //   operands = operandsData.floatingPoint
  //   // Failure as Calculator fails to input floating point
  //   await actions.performOperation(operands.operandOne, operands.operandTwo, actions.operations.ADDITION)
  //   await expect(await actions.getDisplayText()).toHaveText((operands.operandOne + operands.operandTwo).toString());
  // });

})