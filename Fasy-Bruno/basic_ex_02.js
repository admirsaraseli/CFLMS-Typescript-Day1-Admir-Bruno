var main_node = $('body');
main_node.append("<div>Hello World 2-3</div>");
// Print your full name in the browser.
var fullName = ["Tronald", "Dump"];
fullName.forEach(function (value) {
    main_node.append(value + " ");
});
// 2. Print your first name 10 times in the browser using a forEach loop. 
main_node.append("<hr>");
var fullName2 = "Tronald Dump";
var countArray = new Array(10);
for (var i = 0; i < countArray.length; i++) {
    countArray[i] = i;
}
;
countArray.forEach(function () {
    main_node.append("<p>" + fullName2 + "</p>");
});
// A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.
main_node.append("<hr>END 2<hr>");
var fullName3 = "Tronald Dump";
var countArray2 = new Array(10);
for (var i = 0; i < countArray2.length; i++) {
    countArray2[i] = fullName3;
}
;
setTimeout(function () {
    countArray2.forEach(function (value) {
        main_node.append("<p>" + value + "</p>");
    });
}, 5000);
