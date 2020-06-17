var main_node = $('body');
main_node.append("<div>Hello World2</div>");
var element = document.createElement('P');
element.innerHTML = ('Hello from pure Vanilla JS');
document.getElementsByTagName('body')[0].appendChild(element);
var myHardCodedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var myArray = new Array(10);
for (var i = 1; i <= 10; i++) {
    myArray[i - 1] = i;
}
// cause an ERROR
// myArray[5] = 'get an Error';
console.log(myArray);
console.log(myHardCodedArray);
// FIRST STEP
var multiplicator = 1;
var calculate = function (input, multi) {
    var result = input * multi;
    return input + " x " + multi + " = " + result;
};
for (var i = 0; i < 10; i++) {
    main_node.append("<div>" + calculate(myArray[i], multiplicator) + "</div>");
}
main_node.append("<div>END FIRST STEP<hr></div>");
// SECOND STEP
main_node.append("<div><hr></div>");
var multiplicatorArray = new Array(100);
for (var i = 1; i <= 100; i++) {
    multiplicatorArray[i - 1] = i;
}
var calculateArray = function (input, multi) {
    var result = input * multi;
    return input + " x " + multi + " = " + result;
};
for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < multiplicatorArray.length; j++) {
        main_node.append("<div>" + calculateArray(myArray[i], multiplicatorArray[j]) + "</div>");
    }
    ;
    main_node.append("<hr>");
}
;
