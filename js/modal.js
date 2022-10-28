const portfolioModal = document.querySelector(".portfolio__modal");
const project1 = document.querySelector(".portfolio__container-project1");
const close = document.querySelector(".fa-xmark");

function modalOpen() {
  document.body.style.overflowY = "hidden";

  portfolioModal.style.display = "block";
  portfolioModal.style.overflowY = "auto";
}
function modalClose() {
  document.body.style.overflowY = "auto";

  portfolioModal.style.display = "none";
  portfolioModal.style.overflowY = "hidden";
}

project1.addEventListener("click", modalOpen);
close.addEventListener("click", modalClose);
