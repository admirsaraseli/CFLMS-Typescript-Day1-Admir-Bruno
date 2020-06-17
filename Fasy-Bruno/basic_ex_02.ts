let main_node = $('body');
main_node.append(`<div>Hello World 2-3</div>`);


// Print your full name in the browser.
let fullName: string[] = ["Tronald", "Dump"];

	fullName.forEach((value) => {
		main_node.append(`${value} `);
	});

// 2. Print your first name 10 times in the browser using a forEach loop. 
main_node.append(`<hr>`);
let fullName2: string = "Tronald Dump";
let countArray: number[] = new Array(10);

for (let i: number = 0; i < countArray.length; i++){
	countArray[i] = i;
};

countArray.forEach(() => {
	main_node.append(`<p>${fullName2}</p>`);

});

// A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.

main_node.append(`<hr>END 2<hr>`);
let fullName3: string = "Tronald Dump";
let countArray2: string[] = new Array(10);

for (let i: number = 0; i < countArray2.length; i++){
	countArray2[i] = fullName3;
};

setTimeout(() => {
	countArray2.forEach((value) => {
		main_node.append(`<p>${value}</p>`);
	})}, 5000
);







