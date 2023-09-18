const headerHoverSection = document.querySelector(".headerHoverSection");
const hoverBtn = document.querySelector(".headerTexts1");

hoverBtn.addEventListener("mouseover", () => {
  headerHoverSection.style.display = "inline-flex";
});

headerHoverSection.addEventListener("mouseleave", () => {
  headerHoverSection.style.display = "none";
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

  return direction;
}

// // -------------------------------------------------