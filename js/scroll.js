const buttonRight = document.getElementById("scrollRight");
const buttonLeft = document.getElementById("scrollLeft");

buttonRight.onclick = function () {
  document.getElementById("shop-container").scrollLeft += 700;
};
buttonLeft.onclick = function () {
  document.getElementById("shop-container").scrollLeft -= 700;
};
