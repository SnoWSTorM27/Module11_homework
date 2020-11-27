/* Задание 2.

Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы */

function isPrimeNumber(){
    let number = Number(prompt('Введите число не больше 1000'));
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
        var message = `Число ${number} - простое`; 
        for (let index = 2; index <= Math.sqrt(number); index++) {
            if (number % index === 0) {
                message = `Число ${number} - не простое`
                break 
            }
        }
    }    
    console.log(message);     
}
