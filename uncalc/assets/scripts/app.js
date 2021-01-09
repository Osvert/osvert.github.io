const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// This is a comment now!

/* Block comment...
... still comment
*/

//Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //function from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    newResult: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  //currentResult = currentResult + enteredNumber;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initResult, enteredNumber);
  writeToLog('ADD', initResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  //currentResult = currentResult - enteredNumber;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initResult, enteredNumber);
  writeToLog('SUBTRACT', initResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  //currentResult = currentResult * enteredNumber;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initResult, enteredNumber);
  writeToLog('MULTIPLY', initResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  //currentResult = currentResult / enteredNumber;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initResult, enteredNumber);
  writeToLog('DIVIDE', initResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
