// Print your full name in the browser.
function printName(name) {
    if (name) {
        return "Hi " + name;
    }
    else {
        return "Hi  User";
    }
}
var result = printName("Admir Saraseli");
document.getElementById('result').innerHTML = result;
// 2. Print your first name 10 times in the browser using a forEach loop.
var namedata = ['Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir'];
namedata.forEach(function (value) {
    document.getElementById('name').innerHTML += value + '  ';
});
// A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.
setTimeout(function () {
    for (var i = 1; i <= 10; i++) {
        console.log('Saraseli' + i);
    }
}, 5000);
