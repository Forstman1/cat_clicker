

let i = 0;
let count_fayrouz = 0;
let count_jetske = 0;
let	count_patche = 0;
let count_oscar = 0;
let count_smokey = 0;
let count_Ginger = 0;



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
	count_fayrouz++;
	put(count_fayrouz);
});


fayrouz.addEventListener('click', function (){
	count_fayrouz++;
	image.innerHTML = fayrouz_image;
	count_cat.innerHTML = count_fayrouz;
});

jetske.addEventListener('click', function (){
	count_jetske++;
	image.innerHTML = jetske_image;
	count_cat.innerHTML = count_fayrouz;
});

patch.addEventListener('click', function (){
	count_patche++;
	image.innerHTML = patch_image;
	count_cat.innerHTML = count_fayrouz;
});

oscar.addEventListener('click', function (){
	count_oscar++;
	image.innerHTML = oscar_image;
	put(count_oscar);
});

smokey.addEventListener('click', function (){
	count_smokey++;
	image.innerHTML = smokey_image;
	put(count_smokey);
});

Ginger.addEventListener('click', function (){
	count_Ginger++;
	image.innerHTML = Ginger_image;
	put(count_fayrouz);
});

