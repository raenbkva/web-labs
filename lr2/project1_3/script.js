var mainFunction = function() {
    let str = prompt('Введите строку');
    if ((str !== '') && (str !== null)) {
        var finalStr = '';
        let arr = str.split('');
        for (var i = 0; i < arr.length; i++) {
            var unit = arr[i];
            if (unit === 'а') { unit = 'a'; }
            if (unit === 'б') { unit = 'b'; }
            if (unit === 'в') { unit = 'v'; }
            if (unit === 'г') { unit = 'g'; }
            if (unit === 'д') { unit = 'd'; }
            if (unit === 'е') { unit = 'e'; }
            if (unit === 'ё') { unit = 'yo'; }
            if (unit === 'ж') { unit = 'zh'; }
            if (unit === 'з') { unit = 'z'; }
            if (unit === 'и') { unit = 'i'; }
            if (unit === 'й') { unit = 'j'; }
            if (unit === 'к') { unit = 'k'; }
            if (unit === 'л') { unit = 'l'; }
            if (unit === 'м') { unit = 'm'; }
            if (unit === 'н') { unit = 'n'; }
            if (unit === 'о') { unit = 'o'; }
            if (unit === 'п') { unit = 'p'; }
            if (unit === 'р') { unit = 'r'; }
            if (unit === 'с') { unit = 's'; }
            if (unit === 'т') { unit = 't'; }
            if (unit === 'у') { unit = 'u'; }
            if (unit === 'ф') { unit = 'f'; }
            if (unit === 'х') { unit = 'h'; }
            if (unit === 'ц') { unit = 'cz'; }
            if (unit === 'ч') { unit = 'ch'; }
            if (unit === 'ш') { unit = 'sh'; }
            if (unit === 'щ') { unit = 'shh'; }
            if (unit === 'ъ') { unit = '\'\''; }
            if (unit === 'ы') { unit = 'y\''; }
            if (unit === 'ь') { unit = '\''; }
            if (unit === 'э') { unit = 'e\''; }
            if (unit === 'ю') { unit = 'yu'; }
            if (unit === 'я') { unit = 'ya'; }
            if (unit === 'А') { unit = 'A'; }
            if (unit === 'Б') { unit = 'B'; }
            if (unit === 'В') { unit = 'V'; }
            if (unit === 'Г') { unit = 'G'; }
            if (unit === 'Д') { unit = 'D'; }
            if (unit === 'Е') { unit = 'E'; }
            if (unit === 'Ё') { unit = 'YO'; }
            if (unit === 'Ж') { unit = 'ZH'; }
            if (unit === 'З') { unit = 'Z'; }
            if (unit === 'И') { unit = 'I'; }
            if (unit === 'Й') { unit = 'J'; }
            if (unit === 'К') { unit = 'K'; }
            if (unit === 'Л') { unit = 'L'; }
            if (unit === 'М') { unit = 'M'; }
            if (unit === 'Н') { unit = 'N'; }
            if (unit === 'О') { unit = 'O'; }
            if (unit === 'П') { unit = 'P'; }
            if (unit === 'Р') { unit = 'R'; }
            if (unit === 'С') { unit = 'S'; }
            if (unit === 'Т') { unit = 'T'; }
            if (unit === 'У') { unit = 'U'; }
            if (unit === 'Ф') { unit = 'F'; }
            if (unit === 'Х') { unit = 'H'; }
            if (unit === 'Ц') { unit = 'CZ'; }
            if (unit === 'Ч') { unit = 'CH'; }
            if (unit === 'Ш') { unit = 'SH'; }
            if (unit === 'Щ') { unit = 'SHH'; }
            if (unit === 'Ъ') { unit = '\'\''; }
            if (unit === 'Ы') { unit = 'Y\''; }
            if (unit === 'Ь') { unit = '\''; }
            if (unit === 'Э') { unit = 'E\''; }
            if (unit === 'Ю') { unit = 'YU'; }
            if (unit === 'Я') { unit = 'YA'; }
            finalStr = finalStr.concat(unit);
        }
        console.log(finalStr);
    } else {
        mainFunction();
    }
}

mainFunction();