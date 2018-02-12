/*const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

const minRight = 0;
const maxRight = 3840;
const step = 960;
let currentRight = 0;

right.addEventListener("click", function(e) {
	e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + "px";
  }
});

left.addEventListener("click", function(e) {
	e.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + "px";
  }
});*/
  
var leftArrow = document.querySelector('.arrow-left');
var rightArrow = document.querySelector('.arrow-right');
var sliderList = document.querySelector('.slider-list');
var sliderContainer = document.querySelector('.slider');
var size = parseInt(getComputedStyle(sliderContainer).width);
var start = 1;

leftArrow.addEventListener('click', function (e) {
    e.preventDefault();
    var currentLeft = (parseInt(getComputedStyle(sliderList).left));
 
    if (start > 1 && currentLeft % size == 0) {        
      sliderList.style.left = currentLeft + size + 'px';
      start--;      
      
    } else if (currentLeft % size == 0) {
      sliderList.style.left = currentLeft - 4 * size + 'px';
      start = 5;      
    }
 })

rightArrow.addEventListener('click', function (e) {
    e.preventDefault();
    var currentLeft = (parseInt(getComputedStyle(sliderList).left));

    if (start < 5 && currentLeft % size == 0) {

        sliderList.style.left = currentLeft - size + 'px';
        start++;
    
    } else if (currentLeft % size == 0) {
      sliderList.style.left = 0 + 'px';
      start = 1;     
    }
})


window.addEventListener('resize', function() {  
  size = parseInt(getComputedStyle(sliderContainer).width); 
  // console.log("size: " + size);
  // console.log("start: " + start);
  // console.log(-size * start);
  sliderList.style.left = -size * (start-1) + 'px';
});