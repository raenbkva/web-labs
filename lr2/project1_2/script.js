var wall = ';'; //переменная для разделяющего знака

var inputFunction = function() {
    let str = prompt('Введите строчку с разелителем ";"', 'Вот сюда'); //ввод строки
    if ((str == '') || (str == null)) { //проверка на ввод пустой строки и нажатие на кнопку "Отмена"
        inputFunction();
    } else {
        let indexOfWall = str.indexOf(wall);
        if (indexOfWall !== -1) { //проверка на наличие разделяющего знака в веденной строке
            outputFunction(str);
        } else {
            inputFunction();
        }
    }
}

var outputFunction = function(str) {
    let arr = str.split(';');
    let finalArr = [];
    for (var i = 0; i < arr.length; i++) { //убираем пустые элементы созданного из строки массива
        if (arr[i] !== '') {
            finalArr.push(arr[i]);
        }
    }
    document.write(finalArr.join('<br>'));
}

inputFunction();
