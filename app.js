let i = 0;
let count_fayrouz = 0;
let count_jetske = 0;
let	count_patche = 0;
let count_oscar = 0;
let count_smokey = 0;
let count_Ginger = 0;

let depends = 0;


const fayrouz_image = "<img src='cat.jpeg' alt='cat'>";
const jetske_image = "<img src='cat2.jpeg' alt='cat'>";
const patch_image = "<img src='cat3.jpeg' alt='cat'>";
const oscar_image = "<img src='cat4.jpeg' alt='cat'>";
const smokey_image = "<img src='cat5.jpeg' alt='cat'>";
const Ginger_image = "<img src='cat6.jpeg' alt='cat'>";

const fayrouz = document.getElementById('fayrouz');
const jetske = document.getElementById('jetske');
const patch = document.getElementById('patch');
const oscar = document.getElementById('oscar');
const smokey = document.getElementById('smokey');
const Ginger = document.getElementById('Ginger');
var	image = document.getElementById('image');
var count_cat = document.getElementById('count');

let count = 0;

let put = e => {
	count_cat.innerHTML = e;
};

image.addEventListener('click', function (){
	if (depends == 1)
	{
		count_fayrouz++;
		put(count_fayrouz);
	}
	else if (depends == 2)
	{
		count_jetske++;
		put(count_jetske);
	}
	else if (depends == 3)
	{
		count_patche++;
		put(count_patche);
	}
	else if (depends == 4)
	{
		count_oscar++;
		put(count_oscar);
	}
	else if (depends == 5)
	{
		count_smokey++;
		put(count_smokey);
	}
	else if (depends == 6)
	{
		count_Ginger++;
		put(count_Ginger);
	}
});

fayrouz.addEventListener('click', function (){
	count_cat.innerHTML = count_fayrouz;
	depends = 1;
	image.innerHTML = fayrouz_image;
});

jetske.addEventListener('click', function (){
	count_cat.innerHTML = count_jetske;
	depends = 2;	
	image.innerHTML = jetske_image;
});

patch.addEventListener('click', function (){
	count_cat.innerHTML = count_patche;
	depends = 3;
	image.innerHTML = patch_image;
});

oscar.addEventListener('click', function (){
	count_cat.innerHTML = count_oscar;
	depends = 4;
	image.innerHTML = oscar_image;
});

smokey.addEventListener('click', function (){
	count_cat.innerHTML = count_smokey;
	depends = 5;
	image.innerHTML = smokey_image;
});

Ginger.addEventListener('click', function (){
	count_cat.innerHTML = count_Ginger;
	depends = 6;
	image.innerHTML = Ginger_image;
});
