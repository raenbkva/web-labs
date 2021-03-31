var enteringName = function() {
    var enteredName = prompt('Введите свое имя', '');
    if (enteredName !== '') {
        nameVerification(enteredName);
    } else {
        enteringName();
    }
}

var nameVerification = function(name) {
    var agree = confirm('Это ваше имя: ' + name + '?');
    if (agree == true) {
        nameOutput(name);
    } else {
        enteringName();
    }
}

var nameOutput = function(name) {
    alert('Привет ' + name);
}

enteringName();