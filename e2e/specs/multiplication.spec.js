var actions = require('../utils/actions.js')

describe('Multiplication Operations', function () {

  it('Performs multiplication of two positive, single digit numbers', async () => {
    await actions.pressButton('5');
    await actions.pressButton('*');
    await actions.pressButton('9');
    await actions.pressButton('=');
    await expect(await actions.getDisplayText()).toHaveText('45');
  })

  it('Performs multiplication of two Multiple digit numbers with one negative operand', async () => {
    await actions.pressButton('-');
    await actions.pressButton('1');
    await actions.pressButton('4');
    await actions.pressButton('=');
    await actions.pressButton('*');
    await actions.pressButton('3');;
    await actions.pressButton('=');
    await expect(await actions.getDisplayText()).toHaveText('-42');
  })

  it('Performs multiplication of two Multiple digit, positive numbers', async () => {
    await actions.pressButton('1');
    await actions.pressButton('4');
    await actions.pressButton('5');
    await actions.pressButton('*');
    await actions.pressButton('3');
    await actions.pressButton('9');
    await actions.pressButton('=');
    await expect(await actions.getDisplayText()).toHaveText('5655');
  })

  it('Performs multiplication involving Floating point numbers', async () => {
    await actions.pressButton('1');
    await actions.pressButton('4');
    await actions.pressButton('.');
    await actions.pressButton('5');
    // Failure as Calculator fails to input floating point
    await expect(await actions.getDisplayText()).toHaveText('14.5');
    await actions.pressButton('+');
    await actions.pressButton('3');
    await actions.pressButton('=');
    // Failure as Calculator used the wrong number to perform calculation
    await expect(await actions.getDisplayText()).toHaveText('43.5');
  })

})

