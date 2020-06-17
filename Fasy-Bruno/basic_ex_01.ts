let main_node = $('body');
main_node.append(`<div>Hello World2</div>`);

let element = document.createElement('P');
element.innerHTML = ('Hello from pure Vanilla JS');
document.getElementsByTagName('body')[0].appendChild(element);

let myHardCodedArray: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myArray: Number[] = new Array(10);
for (let i = 1; i <= 10; i++){
	myArray[i - 1] = i;
}

// cause an ERROR
// myArray[5] = 'get an Error';

console.log(myArray);
console.log(myHardCodedArray);


// FIRST STEP
let multiplicator: Number = 1;

function calculate(input, multi) {
	let result: Number = input * multi;
	return `${input} x ${multi} = ${result}`;
}
for (let i = 0; i < 10; i++){
	main_node.append(`<div>${calculate(myArray[i], multiplicator)}</div>`);
}
main_node.append(`<div>END FIRST STEP<hr></div>`);

// SECOND STEP
main_node.append(`<div><hr></div>`);
let multiplicatorArray: Number[] = new Array(10);

for (let i = 1; i <= 10; i++){
	multiplicatorArray[i - 1] = i;
}

function calculateArray(input, multi) {
	let result: Number = input * multi;
	return `${input} x ${multi} = ${result}`;
}


for (let i = 0; i < 10; i++){
	for (let j = 0; j < 10; j++) {
		main_node.append(`<div>${calculateArray(myArray[i], multiplicatorArray[j])}</div>`);
	};
	main_node.append(`<hr>`);
};