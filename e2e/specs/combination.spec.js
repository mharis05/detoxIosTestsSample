var actions = require('../utils/actions.js')

describe('Combination of different Operations', function () {

  it('Performs a calculation with more than two operands WITHOUT using = in the middle of each like a + b - c', async () => {
    await actions.pressButton('1');
    await actions.pressButton('0');
    await actions.pressButton('+');
    await actions.pressButton('2');
    await actions.pressButton('0');
    await actions.pressButton('0');
    await actions.pressButton('/');
    await actions.pressButton('5');
    await actions.pressButton('=');
    // Failure as expected answer should be file, however, the calculator seems to
    // be unable of processing operations of more than two operands.
    await expect(await actions.getDisplayText()).toHaveText('50');
  })

  it('Performs a calculation with more than two operands using = in the middle of each like a + b = <result> - c', async () => {
    await actions.pressButton('1');
    await actions.pressButton('5');
    await actions.pressButton('0');
    await actions.pressButton('/');
    await actions.pressButton('3');
    await actions.pressButton('=');

    await actions.pressButton('-');
    await actions.pressButton('7');
    await actions.pressButton('=');

    await actions.pressButton('+');
    await actions.pressButton('4');
    await actions.pressButton('1');
    await actions.pressButton('=');

    await actions.pressButton('*');
    await actions.pressButton('3');
    await actions.pressButton('=');

    await expect(await actions.getDisplayText()).toHaveText('252');
  })

})