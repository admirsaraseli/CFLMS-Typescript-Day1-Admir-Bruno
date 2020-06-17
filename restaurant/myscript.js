$(document).ready(function () {
    var mainNode = $('body');
    var lightTextColor = "text-light";
    var data = JSON.parse(food);
    var create_Nav = function () {
        mainNode.append("  \n\t\t\t<nav class=\"navbar navbar-expand-md navbar-light text-danger bg-dark\">\n\t\t\t\t<a class=\"navbar-brand " + lightTextColor + "\" href=\"./index.html\">Home</a>\n\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t</button>\n\t\n\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t\t\t\t<ul class=\"navbar-nav ml-auto\">\n\t\t\t\t\t\t<li class=\"nav-item active\">\n\t\t\t\t\t\t\t<a class=\"nav-link " + lightTextColor + "\" href=\"#\">Food <span class=\"sr-only\">(current)</span></a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t<a class=\"nav-link " + lightTextColor + "\" href=\"#\">Delivery</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t");
    };
    var create_Jumbo = function () {
        mainNode.append("  \n\t\t\t<div class=\"jumbotron jumbotron-fluid bg-info text-white\">\n\t\t\t\t<div class=\"container-fluid wrapper text-center\">\n\t\t\t\t\t<h1 class=\"\">Check out our Menu</h1>\n\t\t\t\t\t<p class=\"lead\">We offer you nearly everything that is unhealthy!</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    var createFoodContainerRow = function () {
        mainNode.append("  \n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row rowNode justify-content-center\"> \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    };
    function createFoodTable(a) {
        var i = a;
        newNode.append("  \n\t\t\t<div class=\"col-sm-6 col-md-4 col-lg-3\">\n\t\t\t\t<div class=\"card mb-4 bg-dark text-white  text-center\">\n\t\t\t\t\t<img src=\"" + data[i].image + "\" class=\"card-img-top\" alt=\"Hamburger\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h5 class=\"card-title\">" + data[i].name + "</h5>\n\t\t\t\t\t\t<p class=\"card-text\">" + data[i].description + "</p>\n\t\t\t\t\t</div>\n\t\t");
    }
    ;
    create_Nav();
    create_Jumbo();
    createFoodContainerRow();
    var newNode = $('.rowNode');
    for (var i = 0; i < data.length; i++) {
        createFoodTable(i);
    }
});
