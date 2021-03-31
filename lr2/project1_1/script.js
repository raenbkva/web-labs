var mas = [];
for (var i = 0; i < 11; i++){
    mas[i] = [];
    for (var j = 0; j < 11; j++){
        mas[i][j] = i*j;
}}
let firstIndex = prompt('Введите первый индекс', 'Вот сюда');
let secondIndex = prompt('Введите второй индекс', 'Вот сюда');
if ((0 < firstIndex) &&(firstIndex < 11) && (0 < secondIndex) && (secondIndex <11)) {
    alert('Значение нужного элемента массива: ' + mas[firstIndex][secondIndex]);
} else {
    alert('Вы вышли за границы массива');
}
