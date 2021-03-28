'use strict'
function objectNum() {
    let num = +prompt("Введите целое число от 0 до 999");
    if (!Number.isInteger || num < 0 || num > 999) {
        alert("Ошибка {}");
    } else {
       console.log({
            Units: num % 10,
            Tens:Math.floor(num / 10) % 10,
            Hundres: Math.floor(num / 100)
        });
    }
}
objectNum();
