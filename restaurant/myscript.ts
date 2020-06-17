$(document).ready(function () {
	let mainNode: any = $('body');
	let lightTextColor: string = "text-light";

	let data: any = JSON.parse(food);

	
	function create_Nav() {
		mainNode.append(`  
			<nav class="navbar navbar-expand-md navbar-light text-danger bg-dark">
				<a class="navbar-brand ${lightTextColor}" href="./index.html">Home</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
	
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<a class="nav-link ${lightTextColor}" href="#">Food <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link ${lightTextColor}" href="#">Delivery</a>
						</li>
					</ul>
				</div>
			</nav>
	`);
	};

	function create_Jumbo() {
		mainNode.append(`  
			<div class="jumbotron jumbotron-fluid bg-info text-white">
				<div class="container-fluid wrapper text-center">
					<h1 class="">Check out our Menu</h1>
					<p class="lead">We offer you nearly everything that is unhealthy!</p>
				</div>
			</div>
		`);
	};

	function createFoodContainerRow() {
		mainNode.append(`  
			<div class="container">
				<div class="row rowNode justify-content-center"> 
				</div>
			</div>
		`);
	};


	function createFoodTable(a) {
		let i = a;
		newNode.append(`  
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="card mb-4 bg-dark text-white  text-center">
					<img src="${data[i].image}" class="card-img-top" alt="Hamburger">
					<div class="card-body">
						<h5 class="card-title">${data[i].name}</h5>
						<p class="card-text">${data[i].description}</p>
					</div>
		`);	
	};
	create_Nav();
	create_Jumbo();
	createFoodContainerRow();
	let newNode: any = $('.rowNode');
	
	for (let i = 0; i < data.length; i++){
		createFoodTable(i);
	}
	
});

