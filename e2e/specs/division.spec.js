
  var actions = require('../utils/actions.js')
  
  describe('Division Operations', function () {

    it('Performs division of two positive, single digit numbers that produces single digit number', async () => {
      await actions.pressButton('6');
      await actions.pressButton('/');
      await actions.pressButton('3');
      await actions.pressButton('=');
      await expect(await actions.getDisplayText()).toHaveText('2');
    })

    it('Performs division of two positive, multiple digit numbers that produce floating point number', async () => {
      await actions.pressButton('6');
      await actions.pressButton('1');
      await actions.pressButton('/');
      await actions.pressButton('8');
      await actions.pressButton('=');
      await expect(await actions.getDisplayText()).toHaveText('7.625');
    })

    it('Performs division by zero', async () => {
      await actions.pressButton('8');
      await actions.pressButton('/');
      await actions.pressButton('0');
      await actions.pressButton('=');
      await expect(await actions.getDisplayText()).toHaveText('Infinity');
    })

  })
  
