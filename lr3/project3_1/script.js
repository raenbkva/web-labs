var inputMessage = function() {
    var message = prompt('Введите вашу фразу'); //ввод фразы(слова)
    if ((message !== '') && (message !== null)) { //минимальная проверка
        checkFunction(message);
    } else {
        inputMessage();
    }
}

var checkFunction = function(message) {
    let arr = message.split(''); //переводим фразу(слово) в массив
    let arrMessage = [];
    for (var i = 0; i < arr.length; i++) { //убираем возможные пробелы из массива
        if (arr[i] !== ' ') {
            arrMessage.push(arr[i]);
        }
    }
    var halfOfLength = Math.floor(arrMessage.length/2); //делим без остатка длину массива на два
    var flag = 0;
    for (var i = 0; i < halfOfLength; i++) {
        if(arrMessage[i] !== arrMessage[arrMessage.length - i - 1]) { //сравниваем два нужных элемента
            flag++;
        }
    }
    if (flag === 0) { //по посчитанному флагу определяем, является ли фраза(слово) палиндромом
        alert('Это палиндром');
    } else {
        alert('Это не палиндром');
    }
}

inputMessage();