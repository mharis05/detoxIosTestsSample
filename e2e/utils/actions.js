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

exports.performBaseOperation = async function (numberOne, numberTwo, operator) {
    await enterButtonSequence(numberOne);
    // Handle negative numbers - as the calculators only allows negative number as previous result,
    // press = before performing an operation
    if(numberOne < 0) {await enterButtonSequence('=')};
    await enterButtonSequence(operator)
    await enterButtonSequence(numberTwo);
    await enterButtonSequence('=')
}

exports.performBaseOperationNoEquals = async function (numberOne, numberTwo, operator) {
    await enterButtonSequence(numberOne);
    // Handle negative numbers - as the calculators only allows negative number as previous result,
    // press = before performing an operation
    if(numberOne < 0) {await enterButtonSequence('=')};
    await enterButtonSequence(operator)
    await enterButtonSequence(numberTwo);
}

exports.performStackedOperation = async function (number, operator) {
    await enterButtonSequence(operator);
    await enterButtonSequence(number)
    await enterButtonSequence('=')
}

exports.performStackedOperationNoEquals = async function (number, operator) {
    await enterButtonSequence(operator);
    await enterButtonSequence(number)
}

exports.resolveOperation =  {
    "+": async function (x, y) { return await x + y },
    "-": async function (x, y) { return await x - y },
    "*": async function (x, y) { return await x * y },
    "/": async function (x, y) { return await x / y }
}

exports.operations = {
    MULTIPLICATION: '*',
    ADDITION: '+',
    SUBSTRACTION: '-',
    DIVISION: '/'
}