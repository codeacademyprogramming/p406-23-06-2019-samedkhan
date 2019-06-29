

var menu_button = document.querySelector(('.menu_list'), ':before');


menu_button.addEventListener("click", function(){ 
    document.querySelector(".menu_list ul").classList.toggle("show");
 });
