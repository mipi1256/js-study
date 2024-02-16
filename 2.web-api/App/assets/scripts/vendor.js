// 요소 취득 하는것
// 프로그램에서 전역적으로 사용 할 변수, 함수를 정의

// The number that the user will input into the calculator and the buttons 
const $userInput = document.getElementById('input-number');
const $addBtn = document.getElementById('btn-add');
const $subtractBtn = document.getElementById('btn-subtract');
const $multiplyBtn = document.getElementById('btn-multiply');
const $divideBtn = document.getElementById('btn-divide');

// The Current Calcuation Output & Current Result Output
const $currentResultOutput = document.getElementById('current-result');
const $currentCalculationOutput = document.getElementById('current-calculation');


// Log Results 
const $logEntries = document.querySelector('.log-entries');