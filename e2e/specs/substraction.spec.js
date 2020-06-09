var actions = require('../utils/actions.js')

describe('Substraction Operations', function () {

  it('Performs substraction of two positive, single digit numbers, producing a positive number', async () => {
    await actions.pressButton('9');
    await actions.pressButton('-');
    await actions.pressButton('3');
    await actions.pressButton('=');
    await expect(await actions.getDisplayText()).toHaveText('6');
  })


  it('Performs substraction of two positive, single digit numbers, producing a negative number', async () => {
    await actions.pressButton('1');
    await actions.pressButton('-');
    await actions.pressButton('3');
    await actions.pressButton('=');
    await expect(await actions.getDisplayText()).toHaveText('-2');
  })

  it('Performs substraction involving Floating point numbers', async () => {
    await actions.pressButton('1');
    await actions.pressButton('4');
    await actions.pressButton('.');
    await actions.pressButton('5');
    // Failure as Calculator fails to input floating point
    await expect(await actions.getDisplayText()).toHaveText('14.5');
    await actions.pressButton('-');
    await actions.pressButton('3');
    await actions.pressButton('=');
    // Failure as Calculator used the wrong number to perform calculation
    await expect(await actions.getDisplayText()).toHaveText('11.5');
  })

})
