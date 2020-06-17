let main_node = $('body');
main_node.append(`<div>Hello World2</div>`);

let element = document.createElement('P');
element.innerHTML = ('Hello from pure Vanilla JS');
document.getElementsByTagName('body')[0].appendChild(element);

let myHardCodedArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myArray: number[] = new Array(10);
for (let i = 1; i <= 10; i++){
	myArray[i - 1] = i;
}

// cause an ERROR
// myArray[5] = 'get an Error';

console.log(myArray);
console.log(myHardCodedArray);


// FIRST STEP
let multiplicator: number = 1;

let calculate = (input : number, multi : number) => {
	let result: number = input * multi;
	return `${input} x ${multi} = ${result}`;
}

for (let i = 0; i < 10; i++){
	main_node.append(`<div>${calculate(myArray[i], multiplicator)}</div>`);
}
main_node.append(`<div>END FIRST STEP<hr></div>`);

// SECOND STEP
main_node.append(`<div><hr></div>`);
let multiplicatorArray: number[] = new Array(100);

for (let i = 1; i <= 100; i++){
	multiplicatorArray[i - 1] = i;
}

let calculateArray = (input : number, multi : number) =>{
	let result: number = input * multi;
	return `${input} x ${multi} = ${result}`;
}


for (let i = 0; i < myArray.length; i++){
	for (let j = 0; j < multiplicatorArray.length; j++) {
		main_node.append(`<div>${calculateArray(myArray[i], multiplicatorArray[j])}</div>`);
	};
	main_node.append(`<hr>`);
};