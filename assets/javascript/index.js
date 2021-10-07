// Slide Javascript

var arrayIMG = [
    {
        imageUrl: "url('https://www.w3schools.com/w3images/la.jpg')",
        title: 'Los Angeles',
        subTitle: 'We had the best time playing at Venice Beach!'
    },

    {
        imageUrl: "url('https://www.w3schools.com/w3images/chicago.jpg')",
        title: 'Chicago',
        subTitle: 'Thank you, Chicago - A night we won\'t forget.'
    },

    {
        imageUrl: "url('https://www.w3schools.com/w3images/ny.jpg')",
        title: 'New York',
        subTitle: 'The atmosphere in New York is lorem ipsum.'
    }
]

var sliders = document.getElementById("slider");
var sliderTitle = document.getElementById("slider-title");
var sliderDescription = document.getElementById("slider-description");

var index = 0;

function slideCycle() {

    sliderTitle.innerText = arrayIMG[index].title;

    sliderDescription.innerText = arrayIMG[index].subTitle;

    sliders.style.backgroundImage = arrayIMG[index].imageUrl;

    index++;

    if(index >= 3) {
        index = 0;
    }
}
slideCycle();

setInterval(function(){ 
    slideCycle();
}, 3000);


// Modal javascript
const buyButtons = document.querySelectorAll(".js-buytickets");
const modal = document.querySelector(".js-modal");
const closeButton = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

function openModal() {
    modal.classList.add("modal-open");
}

function closeModal() {
    modal.classList.remove("modal-open");
}

for(var buyButton of buyButtons) {
    buyButton.addEventListener('click', openModal)
};

closeButton.addEventListener('click', closeModal);

modal.addEventListener('click', closeModal);

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})

//reponsive menu
const miniMenu = document.querySelector(".js-show-menu")
const nav = document.querySelector(".js-nav-bar");
const navMore = document.querySelector(".js-nav-more");
const subNav = document.querySelector(".js-sub-nav-bar");
const body = document.querySelector("body")

body.addEventListener('click', function() {
    if(nav.classList.contains("open-block")) {
        nav.classList.remove("open-block");
    }
    if(subNav.classList.contains("open-block")) {
        subNav.classList.remove("open-block");
    }
});

navMore.addEventListener('click', function(event) {
    event.stopPropagation();
    if(subNav.classList.contains("open-block")) {
        subNav.classList.remove("open-block");
    }
    else {
        subNav.classList.add("open-block");
    }
});

miniMenu.addEventListener('click', function(event) {
    event.stopPropagation();
    if(nav.classList.contains("open-block")) {
        nav.classList.remove("open-block");
    }
    else {
        nav.classList.add("open-block");
    }
});