let enteredNumber = + prompt('Введите прошедшее количество дней', 'Вот сюда');
var result = 100 - enteredNumber;

if (((result > 4) && (result < 21)) || ((result % 10) === 5) || ((result % 10) === 6) || ((result % 10) === 7) || ((result % 10) === 8) || ((result % 10) === 9) || ((result % 10) === 0)) {
    console.log('Осталось ' + result + ' дней');
} else if (((result % 10) === 1)) {
    console.log('Остался ' + result + ' день');
} else {
    console.log('Осталось ' + result + ' дня');
}