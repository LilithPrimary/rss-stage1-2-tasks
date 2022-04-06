import help from '../../assets/script/help.js';

class PetCard2 {
    constructor(pet) {
        this.petName = document.createElement("h6");
        this.petName.classList.add("pet__name");
        this.petName.textContent = pet.name;
        this.breed = document.createElement("span");
        this.breed.classList.add("pet-card__breed");
        this.breed.textContent = `${pet.type} - ${pet.breed}`;
        this.description = document.createElement("span");
        this.description.classList.add("pet-card__description");
        this.description.textContent = pet.description;
        this.img = document.createElement("div");
        this.img.classList.add("pet__img");
        this.img.style.backgroundImage = `url(${pet.img})`;
        this.petInfo = document.createElement("ul");
        this.petInfo.classList.add("pet-card__bottom");
        const age = document.createElement("li");
        age.classList.add("pet-card__point");
        age.innerHTML = `<strong>Age:</strong> ${pet.age}`;
        const inoculations = document.createElement("li");
        inoculations.classList.add("pet-card__point");
        inoculations.innerHTML =`<strong>Inoculations:</strong> ${pet.inoculations.join(", ")}`;
        const diseases = document.createElement("li");
        diseases.classList.add("pet-card__point");
        diseases.innerHTML =`<strong>Inoculations:</strong> ${pet.diseases.join(", ")}`;
        const parasites = document.createElement("li");
        parasites.classList.add("pet-card__point");
        parasites.innerHTML =`<strong>Inoculations:</strong> ${pet.parasites.join(", ")}`;
        this.petInfo.append(age, inoculations, diseases, parasites);
        this.button = document.createElement("button");
        this.button.classList.add("button", "pet__button");
        this.button.textContent = "Learn more";
        this.isShow = false;
    }

    getPetCard() {
        this.petCard = document.createElement("div");
        this.petCard.classList.add("pets__item", "pet");
        const petInfo = document.createElement("div");
        petInfo.classList.add("pet__info", "pet-card");
        this.buttonClose = document.createElement("button");
        this.buttonClose.classList.add("round__button", "material-icons", "pet-card__close");
        this.buttonClose.textContent = "close";
        const top = document.createElement("div");
        top.classList.add("pet-card__top");
        const petNameModal = document.createElement("h3");
        petNameModal.classList.add("pet-card__name");
        petNameModal.textContent = this.petName.textContent;
        top.append(petNameModal, this.breed);
        petInfo.append(this.buttonClose, top, this.description, this.petInfo);
        this.petCard.append(this.img, this.petName, petInfo, this.button);
        this.div = document.createElement("div");
        this.div.append(this.petCard);
        return this.div;
    }
}

const helpItems = document.querySelector(".help__items");
const menuLinks = document.querySelectorAll(".header__link");
const petsArea = document.querySelector(".pets__items");
const btnForward = document.querySelector(".forward");
const btnBack = document.querySelector(".back");
const shadow = document.querySelector(".shadow");
let petCards;


menuLinks.forEach((el, i) => {
    el.addEventListener("click", (e) =>{
        document.querySelector(".header__link-active").classList.remove("header__link-active");
        e.target.classList.add("header__link-active");
    });
})

function fillPetsArea(arr) {
    let n;
    const nowCards = [];
    switch (true) {
        case window.screen.width >= 1280: n = 8; break;
        case window.screen.width < 768: n = 3; break;
        default: n = 6;
    }
    for (let i = 0; i < n; i++) {
        let card = getRandomCard(arr);
        petsArea.append(card.getPetCard());
        card.isShow = true;
        nowCards.push(card);
    }
    arr.forEach(el => el.isShow = nowCards.includes(el) ? true : false);
}

function getRandomCard(arr) {
    let i = Math.floor(Math.random()*arr.length);
    return arr[i].isShow ? getRandomCard(arr) : arr[i];
}

async function getPost () {
    const response = await fetch ("../../static/pets.json");
    const data = await response.json();
    petCards = fillCards2(data);
    fillPetsArea(petCards);
    [btnForward, btnBack].forEach(el => el.addEventListener("click", () => {
        petsArea.innerHTML = "";
        fillPetsArea(petCards);
        showModalWindow();        
    }));
    showModalWindow();
}

function showModalWindow() {
    petCards.forEach(el => {
        if (el.div) {
            el.div.addEventListener("click", () => {
                el.petCard.classList.add("pet__show-more");
                shadow.classList.remove("hide");
            });
        }
    })
}

function fillCards2(array) {
    const arrOfPets = [];
    array.forEach(el => arrOfPets.push(new PetCard2(el)));
    return arrOfPets;
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pet-card__close")) {
        e.target.parentNode.parentNode.classList.remove("pet__show-more");
        shadow.classList.add("hide");
    }
});
shadow.addEventListener("click", () => {
    if (document.querySelector(".pet__show-more")) {
        document.querySelector(".pet__show-more").classList.remove("pet__show-more");
    }
    shadow.classList.add("hide");
})

getPost();

// const burger = document.querySelector(".burger");
// burger.addEventListener("click", () => {
//     burger.classList.toggle("open");
//     document.querySelector(".header__menu").classList.toggle("open");
// })