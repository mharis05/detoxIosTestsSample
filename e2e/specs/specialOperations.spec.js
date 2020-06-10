var actions = require('../utils/actions')

specialKeys = {
    clearScreen: "c",
    clearInput: "ce",
    clearScreenIndicatorDigit: '0'
}

testDataOperations = {
    operandOne: 8,
    operandTwo: 5,
    operandThree: 6
}

testDataMaxDigits = {
    operandOne: 1,
    operandTwo: 3
}


describe('Special Calculator features', function () {

    it('Pressing [c] Clears the input before an operation is performed', async () => {
        await actions.enterBtnSequence(testDataOperations.operandOne);
        await actions.enterBtnSequence(specialKeys.clearScreen)
        await await expect(await actions.getDisplayText()).toHaveText(specialKeys.clearScreenIndicatorDigit)
    })

    it('Pressing [c] Clears the input after an operation is performed', async () => {
        await actions.performBaseOperation(testDataOperations.operandOne, testDataOperations.operandTwo, actions.operations.ADDITION)
        await actions.enterBtnSequence(specialKeys.clearScreen)
        await expect(await actions.getDisplayText()).toHaveText(specialKeys.clearScreenIndicatorDigit);
    })

    it('Pressing [ce] allows correcting an input before an operation is performed', async () => {
        await actions.enterBtnSequence(testDataOperations.operandOne);
        await actions.enterBtnSequence(actions.operations.ADDITION);
        await actions.enterBtnSequence(testDataOperations.operandTwo);
        await actions.enterBtnSequence(specialKeys.clearInput)
        await expect(await actions.getDisplayText()).toHaveText(specialKeys.clearScreenIndicatorDigit);
        await actions.enterBtnSequence(testDataOperations.operandThree)
        await actions.enterBtnSequence('=');
        // Failure - ce feature does not work.
        await expect(await actions.getDisplayText()).toHaveText((testDataOperations.operandOne + testDataOperations.operandThree).toString());
    })

    it('Infinite decimal digits result to max 18 digits', async () => {
        await actions.performBaseOperation(testDataMaxDigits.operandOne, testDataMaxDigits.operandTwo, actions.operations.DIVISION)
        await expect(await actions.getDisplayText()).toHaveText((testDataMaxDigits.operandOne / testDataMaxDigits.operandTwo).toString());
    })



})