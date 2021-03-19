'use strict'
/**
 * Функция сложения двух параметров
 * @param {number} a 
 * @param {number} b 
 * @returns результат сложения
 */
function sum(a, b) {
    return a + b;
}
/**
 * Функция вычитания двух параметров
 * @param {number} a 
 * @param {number} b 
 * @returns результат вычитания
 */
function subtraction(a, b) {
    return a - b;
}
/**
 * Функция умножения двух параметров
 * @param {number} a 
 * @param {number} b 
 * @returns результат умножения
 */
function multiply(a, b) {
    return a * b;
}
/**
 * Функция деления двух параметров
 * @param {number} a 
 * @param {number} b 
 * @returns результат деления
 */
function divide(a, b) {
    return a / b;
}
/**
 * Функция выполняет математические действия
 * @param {number} a 
 * @param {number} b 
 * @param {string} operation 
 * @returns 
 */
function mathOperation(a, b, operation) {
    switch (operation) {
        case "+":
            return sum(a, b);
        case "-":
            return subtraction(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            throw new Error("Данная операция не выполнима");

    }
}
alert(mathOperation(2, 6, "+"));
alert(mathOperation(2, 6, "-"));
alert(mathOperation(2, 6, "*"));
alert(mathOperation(2, 6, "/"));

