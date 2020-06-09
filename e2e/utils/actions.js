var enterButtonSequence = exports.enterBtnSequence = async function (btn) {
    input = btn.toString().split("")
    for (const el of input) {
        await element(by.id(`input-button-${el}`)).tap();
    };
}

exports.getDisplayText = async function () {
    const displayElement = await element(by.id('display-text'));
    return displayElement;
}

exports.performOperation = async function (numberOne, numberTwo, operator) {
    await enterButtonSequence(numberOne);
    await enterButtonSequence(operator)
    await enterButtonSequence(numberTwo);
    await enterButtonSequence('=')
}

exports.operations = {
    MULTIPLICATION: '*',
    ADDITION: '+',
    SUBSTRACTION: '-',
    DIVISION: '/'
}