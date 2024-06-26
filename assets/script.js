const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const bannerImage = document.querySelector(".banner-img")
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const dots = document.querySelectorAll(".dot")

let indexTab = 0

// Creation de dot pour le nombre d'image + mise a jour de la bullet
function dotUpdate() {
    const dotsContainer = document.querySelector('.dots');
    dotsContainer.innerHTML = ''; // Clear previous dots

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add("dot");
		if (i === indexTab){
			dot.classList.add("dot_selected")
		}
        dotsContainer.appendChild(dot);
    }
}
dotUpdate();



function carousselUpdate (index, direction){
	
	if (indexTab < 0){
		indexTab = 3
	}
	else if (indexTab > slides.length - 1){
		indexTab = 0
	}

	// Mise à jour de l'image
	const image = `assets/images/slideshow/${slides[indexTab].image}`
	bannerImage.src = image
	bannerImage.alt = `Slide${indexTab + 1}`

	//Mettre à jour le text de chaque photo
	const tagLine = slides[indexTab].tagLine
	document.querySelector("p").innerHTML = tagLine
}

// Evenement de la fleche gauche

arrowLeft.addEventListener("click", () => {
	console.log("Vous avez cliqué sur la fleche de gauche")
	indexTab = (indexTab - 1)
	carousselUpdate(indexTab)
	dotUpdate(indexTab)
})

// Evenement de la fleche droite

arrowRight.addEventListener("click", () => {
	console.log("Vous avez cliqué sur la fleche de droite")
	indexTab = (indexTab + 1)
	carousselUpdate(indexTab)
	dotUpdate(indexTab)
})