
var cat_image = document.querySelector(".cat-image");

var cat_name_class = document.querySelector(".cat-name");

var count = document.querySelector(".count");

const cat_name = "chewie";

let i = 0;
count.innerHTML = i;
cat_name_class.innerHTML = cat_name;
cat_image.addEventListener('click', function (){

	console.log(i);
	count.innerHTML = i;
	i++;
});