function numberSum() {
    var total = 0;
    for (var i = 1; i <= 3; i++) {
        total += i;
    }
    // console.log(total);
    logger('Сума від 0 до 3 = ' + total);
}

function numberSum2() {
    var sum = 0;
    for (var i = 20; i <= 220; i++) {
        sum += i;
    }
    // console.log(sum);
    logger('Сума від 20 до 220 = ' + sum);
}

function evenNumb() {
    var log = '';
    for (var i = 2; i <= 20; i++) {
        if ((i % 2) != 0) {
            continue;
        }
        log += i + ' ';
    }

    logger('Всі парні числа від 1 до 20 з continue = ' + log);
}

function withoutContinue() {
    var log = '';
    for (var i = 2; i <= 20; i += 2) {
        if ((i % 2) == 0) {
            // console.log(i);
            log += i + ' ';
        }
    }
    logger('Всі парні числа від 1 до 20 без continue = ' + log);
}

function whileNumb() {
    var log = '';
    var i = 9;
    while (i < 29) {
        i += 2;
        // console.log(i);
        log += i + ' ';
    }
    logger('Всі непарні числа від 10 до 30 = ' + log);
}
function ex1() {
    var mob = 3;
    var  log = '';

    for (var i = 1; i <= 15; i++) {
        // console.log(i);

        if (i == mob) {
            // console.log('My b at ' + i);
            log += 'My birthday at ' + i;

            break;
        }

        log += i + ' ';

    }
    logger(log);
}

function ex2() {
    var i = 1;
    var log = '';

    while (i <= 15) {

        // console.log(i);
        if (i == 3) {
            log += 'My birthday with while at ' + i;
            break;
        }
        log += i + ' ';
        i++;

    }
    logger(log);
    // console.log('My b at ' + i);
}

function ask() {
    return prompt('Ведіть число більше 100', '');
}

function loop() {
    var num = 0;

    while (num < 100) {
        num = ask();
    }
    // console.log(num);
    logger(num);
}

function loop2() {
    var num = 0;
    do {
        num = ask();
    } while (num < 100);

    logger(num);
}


function ex10() {
    var str = '';
    for (var i = 0; i < 8; i++) {
        for(var j = 0; j < i; j++)
        {
            str += '#';

        }
        str += '\n';
    }

    logger('<pre>'+ str + '</pre>');
    // console.log();
}

function logger(data) {
    var log = $('<p class="log"></p>');
    log.html(data);

    $('#console').prepend(log);
}
