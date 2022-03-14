import help from '../../assets/script/help.js';

const menuLinks = document.querySelectorAll(".header__link");
menuLinks.forEach(el => el.addEventListener("click", (e) =>{
    console.log(document.querySelector(".header__link-active"));
    console.log(e.target);
    document.querySelector(".header__link-active").classList.remove("header__link-active");
    e.target.classList.add("header__link-active");
}))
const helpItems = document.querySelector(".help__items");
help.forEach(el => {
    const item = document.createElement("div");
    item.classList.add("item");
    const img = document.createElement("img");
    img.classList.add("item__img");
    img.src = el.img;
    const title = document.createElement("h4");
    title.classList.add("item__title");
    title.textContent = el.title;
    item.append(img, title);
    helpItems.append(item);
})