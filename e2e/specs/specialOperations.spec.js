var actions = require('../utils/actions.js')

describe('Special Calculator features', function () {

    it('Pressing [c] Clears the input before an operation is performed', async () => {
        await actions.pressButton('5');
        await actions.pressButton('c')
        await await expect(await actions.getDisplayText()).toHaveText('0')
    })

    it('Pressing [c] Clears the input after an operation is performed', async () => {
        await actions.pressButton('5');
        await actions.pressButton('+');
        await actions.pressButton('5');
        await actions.pressButton('=');
        await actions.pressButton('c')
        await expect(await actions.getDisplayText()).toHaveText('0');
    })

    it('Pressing [ce] allows correcting an input before an operation is performed', async () => {
        await actions.pressButton('5');
        await actions.pressButton('+');
        await actions.pressButton('5');
        await actions.pressButton('ce')
        await actions.pressButton('6')
        await actions.pressButton('=');
        // Failure - ce feature does not work.
        await expect(await actions.getDisplayText()).toHaveText('11');
    })

    it('Infinite decimal digits result to max 18 digits', async () => {
        await actions.pressButton('1');
        await actions.pressButton('/');
        await actions.pressButton('3');
        await actions.pressButton('=')
        await expect(await actions.getDisplayText()).toHaveText('0.3333333333333333');
    })



})