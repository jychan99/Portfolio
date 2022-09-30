const menuList = document.querySelector(".navbar__mobile__info-container");
const menuButton = document.querySelector(".navbar__mobile__menu");

function dropDown() {
  if (menuList.style.top === "8%") {
    menuList.style.top = "-17%";
    menuList.style.transition = "1s";
  } else {
    menuList.style.top = "8%";
    menuList.style.transition = "1s";
  }
}

menuButton.addEventListener("click", dropDown);
