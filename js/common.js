function numberSum() {
    var total = 0;
    for (var i = 1; i <= 3; i++) {
        total += i;
    }
    // console.log(total);
}
numberSum();




function numberSum2() {
    var sum = 0;
    for (var i = 20; i <= 220; i++) {
        sum += i;
    }
    // console.log(sum);
}
numberSum2();




function evenNumb() {
    for (var i = 2; i <= 20; i++)
    {
        if ((i % 2) != 0) {
            continue;
        }
        // console.log(i);
    }
}
evenNumb();


function withoutContinue() {
var i = 0;
    for (i=2;i<=20;i+=2) {
    if ((i % 2) == 0) {
        // console.log(i);
    }
    }
}
withoutContinue();



function whileNumb() {
    var i = 9;
    while(i < 29) {
        i += 2;
        // console.log(i);
    }
}
whileNumb();


function ex1() {
    var mob = 3;
    for (var i = 1; i <=15; i++) {
        // console.log(i);
        if (i == mob) {
            // console.log('My b at ' + i);
            break;
        }
    }
}
ex1();



function ex2() {
    var i = 1;

    while (i <= 15) {
        // console.log(i);
        if (i == 3){
            break;
        }
        i += 1;

    }
    // console.log('My b at ' + i);
}
ex2();



function ask() {
    return prompt('Ведіть число більше 100', '');
}

function loop() {
    var num = 0;
    while (num < 100)
    {
        num = ask();
    }
    // console.log(num);
}

loop();


// function loop2() {
//     var i = 0;
//     do {
//         return prompt('Ведіть число більше 100', '');
//     } while (i < 100);
// }
// loop2();

function ex10() {
    var str = '';
    for(var i = 0; i < 8; i++)
    {
        str += '#';
        console.log(str);
    }
}

ex10();