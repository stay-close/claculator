var btn = document.querySelectorAll('.btn');
var ac_btn = document.querySelector('.ac_btn');
var clr_btn = document.querySelector('.clr_btn');
var eql_btn = document.querySelector('.eql_btn');
var hist = document.querySelector('.history');

btn.forEach(button => {
    button.addEventListener('click', lol => {

        calc.txt.value += lol.target.value;

    })
})

// for (var i = 0; i < 15; i++) {
//     btn[i].addEventListener('click', function() {
//         calc.txt.value += this.value;
//     });
// }

eql_btn.addEventListener('click', function() {
    if (calc.txt.value == "") {
        calc.txt.value = '';
    } else {
        hist.innerHTML = calc.txt.value;
        calc.txt.value = eval(calc.txt.value);

    }

})

ac_btn.addEventListener('click', function() {
    calc.txt.value = '';
    hist.innerHTML = "";
})
clr_btn.addEventListener('click', function() {
    var ac = calc.txt.value.toString();
    calc.txt.value = ac.substr(0, ac.length - 1);

})