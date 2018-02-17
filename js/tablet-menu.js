const openButton = document.querySelector("#hamburger-menu");

openButton.addEventListener("click", function() {

  const overlayElement = document.querySelector(".overlay");
  overlayElement.style.display = "flex";

  const pointsElement = document.querySelector(".points");
  pointsElement.style.display = "none";

  const closeElement = document.querySelector(".close");

  closeElement.addEventListener("click", function() {
    overlayElement.style.display = "none";
  
  });

});