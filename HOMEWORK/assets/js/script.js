

var menu_button = document.querySelector(('.menu_list'), ':before');
var menu_list = document.querySelector(".menu_list ul");



menu_button.addEventListener("click", function(){ 
    document.querySelector(".menu_list ul").classList.toggle("show");
 });
