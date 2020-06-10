var actions = require('../utils/actions')

testData = {
  "Single Digit": {
    operandOne: 5,
    operandTwo: 9,
  },
  "Multiple Digits": {
    operandOne: 145,
    operandTwo: 39
  },
  "Floating Point": {
    operandOne: 14.5,
    operandTwo: 3.9
  }
}

describe('Addition Operation Tests', function () {

  /* 
  Single test function that uses data driven approach to run as many times as
  the number of input classes.
  */

  /*
  Approach:
  Using the data object 'testData' above:
  1. Perform the operation
  2. Calculate and validate the final expected result for each nested data object in the test data
  */
  for (let [key, operands] of Object.entries(testData)) {

    it(`Performs addition of two ${key} numbers:`, async () => {
      await actions.performBaseOperation(operands.operandOne, operands.operandTwo, actions.operations.ADDITION)
      await expect(await actions.getDisplayText()).toHaveText((operands.operandOne + operands.operandTwo).toString());
    });
  }

})