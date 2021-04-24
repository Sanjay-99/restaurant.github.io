window.addEventListener("scroll" , function(){
    var header = document.querySelector('section');
    header.classList.toggle("sticky" , window.scrollY > 0);
});


let hamburger = document.querySelector('.header .header_container .hamburger');
let mobile_menu = document.querySelector('.header .header_container ul');
const menu_item = document.querySelectorAll('.header .header_container ul li a');
const menu = document.querySelector(".header .header_container");
    hamburger.addEventListener('click' , function() {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
    menu.classList.toggle("active");
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});