let mas = [
    {id: 2, name: "Организация", parent_id: null},
    {id: 3, name: "Бухгалтерия", parent_id: 2},
    {id: 6, name: " Отдел охраны", parent_id: 2},
    {id: 7, name: "Караульная служба", parent_id: 6},
    {id: 8, name: "Бюро пропусков", parent_id: 6},
    {id: 12, name: "Патентный отдел", parent_id: 2},
    {id: 13, name: "Лётная служба", parent_id: 2},
    {id: 14, name: "Лётный отряд Боинг 737", parent_id: 13},
    {id: 17, name: "Лётный отряд Боинг 747", parent_id: 13},
    {id: 18, name: "1-ая авиационная эксадрилия Боинг 737", parent_id: 14},
    {id: 19, name: "2-ая авиационная эскадрилия Боинг 737", parent_id: 14},
    {id: 21, name: "Лётно-методический отдел", parent_id: 13}
]

var funcli = function(i, number) { //функция создания элемента списка
    let li = document.createElement("li");
    li.innerHTML = mas[i].name;
    nowul = document.querySelector('.ul_' + number); //поиск нужного списка
    nowul.insertAdjacentElement("beforeEnd", li);
    flag = 0;
    for (let j = i + 1; j < mas.length; j++) { //проверка является ли элемент списка тоже списком
        if (mas[i].id == mas[j].parent_id) { flag++; }
    }
    if (flag > 0) {
        funcul(i, li);
    } else {
        mas[i].id = -1; //отмечаем, что элемент уже использовался
    }
}

var funcul = function(i, li) { //функция создания списка
    var ul = document.createElement("ul");
    ul.classList.add('ul_'+i);
    li.insertAdjacentElement("beforeEnd", ul);
    for (let j = i + 1; j < mas.length; j++) { // элементы-списки посылаем в функцию для создания списка в элементе
        if (mas[i].id == mas[j].parent_id) {
            funcli(j, i);
        }
    }
    mas[i].id = -1; //отмечаем, что элемент уже использовался
}

let body = document.querySelector('body');
let flag;
var mainul = document.createElement("ul");
mainul.classList.add('ul_'+ 'main');
body.insertAdjacentElement("beforeEnd", mainul);
for (let i = 0; i < mas.length; i++) {
    if (mas[i].id !== -1) { //не посылаем в обработку уже использованные элементы
        funcli(i, 'main');
    }
}