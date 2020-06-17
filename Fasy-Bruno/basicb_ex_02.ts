console.log ("external file")
function writebruno() {
	var name: string = "Bruno M";
	console.log(name);
	var node = document.getElementById("result");
	console.log (node);
	node.innerHTML = name;
}
writebruno()