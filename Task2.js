/* Задание 2.

Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы */

function isPrimeNumber(number){
    if ((number === 1) || (number === 0)) {
        console.log(`Число ${number} - не простое`)
        return 
    } else if (isNaN(number)) {
        console.log('Это не число!!!') 
        return
    } else if (number > 1000) { 
        console.log('Нужно ввести число не больше 1000!')
        return
    } else {
        let message = `Число ${number} - простое`; // лучше не использовать ключевое слово var для объявления переменных, это устаревший синтаксис. Старайтесь использовать более современные let или const
        for (let index = 2; index <= Math.sqrt(number); index++) {
            if (number % index === 0) {
                message = `Число ${number} - не простое`
                break 
            }
        }
    }    
    console.log(message);     
}

let num = Number(prompt('Введите число не больше 1000'));
isPrimeNumber(num);

// Задание засчитала, т.к. используется prompt и можно проверить разные числа, но лучше всё-таки передавать число в качестве аргумента, чтобы иметь бОльшую свободу в использовании функции - проверять какие угодно числа, не только из prompt, но и например из инпутов на странице, значения, полученные с сервера и т.д.
