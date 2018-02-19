 ////Slider - Burgers  
var leftArrow = document.querySelector('.arrow-left');
var rightArrow = document.querySelector('.arrow-right');
var sliderList = document.querySelector('.slider-list');
var sliderContainer = document.querySelector('.slider');
var size = parseInt(getComputedStyle(sliderContainer).width);
var start = 1;

leftArrow.addEventListener('click', function (e) {
    e.preventDefault();
    var currentLeft = (parseInt(getComputedStyle(sliderList).left));
  
  console.log(currentLeft, start);
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
  sliderList.style.left = -size * (start-1) + 'px';
});









//////REVIEWS




  
const openReviewButton = document.querySelector("#openReviewButton");

openReviewButton.addEventListener("click", function() {

//console.log('in function');

  const overlayRevElement = document.querySelector("reviews overlay");
  overlayRevElement.classList.add("active");
    
  const nameElement = document.querySelector("review-over__name");
  nameElement.textContent = document.querySelector(".reviews__name").textContent;

  const pointsElement = document.querySelector(".points");
  pointsElement.style.display = "none";

  const closeRevElement = document.querySelector("reviewClose");
 
  closeRevElement.addEventListener("click", function() {
    overlayRevElement.classList.remove("active");
  });

  return overlayRevElement;
});


/*
  const overReviewElement = document.createElement("div");
  overReviewElement.classList.add("overlay");

  console.log(overlay);

  const template = document.querySelector("#overlayReviewTemplate");
  overReviewElement.innerHTML = template.innerHTML; 

   console.log(template);

  const closeElement = overReviewElement.querySelector(".close");
  closeElement.addEventListener("click", function() {
    document.body.removeChild(overReviewElement);

     console.log(closeElement);
  });

  const reviewTextElement = overReviewElement.querySelector(".reviewText");
  document.body.appendChild(overReviewElement);

console.log(reviewTextElement);
console.log(overReviewElement);
  return overReviewElement;

  var reviewText = openReviewButton.previousElementSibling;
  var reviewName = reviewText.previousElementSibling;
  console.log (reviewText,reviewName);
*/




//// MENU - ACCORDEON


var accordion = document.getElementById("menu-accordion");
var i;
    
accordion.addEventListener("click", function(e) {
  var items = accordion.getElementsByClassName("acc-menu__item"),
    contents = accordion.getElementsByClassName("acc-menu__content");
  
  // если кликнули по триггеру или по блоку с текстом внутри него
  if (e.target.classList.contains("acc-menu__trigger") || e.target.classList.contains("acc-menu__tr-text")) { 
  
    var trigger;
    
    if (e.target.classList.contains("acc-menu__trigger")) { // если клик по триггеру
      trigger = e.target;
    } else { // значит клик был по тексту и триггер это родительский узел блока с текстом
      trigger = e.target.parentNode;
    }
    
    var content = trigger.nextElementSibling;
    var item = trigger.parentNode;
       

    if (!item.classList.contains("active")) { // не активный
      // удаляем active для всех li
      for (i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
      }
      // добавляем active для текущего li
      item.classList.add("active");

      // закрываем все блоки с контентом
      for (i = 0; i < contents.length; i++) {
        contents[i].style.width = null;
      }
      // открываем текущий блок с контентом
      content.style.width = content.offsetWidth + "px";
      
    } else { // активный
      // удаляем класс active для текущего li
      item.classList.remove("active");
      
      // закрываем текущий блок с контентом
      content.style.width = null;
    }
  }
});




// Team - horizontal - accordeon
var accordion2 = document.getElementById("team-accordion"),
    items2 = accordion2.getElementsByClassName("team-acc__item"),
    contents2 = accordion2.getElementsByClassName("team-acc__content"),
    i;

accordion2.addEventListener("click", function(e) {
  if (e.target.classList.contains("team-acc__trigger")) {
    var trigger = e.target;
    var content = trigger.nextElementSibling;
    var item = trigger.parentNode;

    if (!item.classList.contains("active")) { // не активный
      // удаляем active для всех li
      for (i = 0; i < items2.length; i++) {
        items2[i].classList.remove("active");
      }
      // добавляем active для текущего li
      item.classList.add("active");

      // закрываем все блоки с контентом
      for (i = 0; i < contents2.length; i++) {
        contents2[i].style.height = null;
      }
      // открываем текущий блок с контентом
      content.style.height = content.scrollHeight + "px";
      
    } else { // активный
      // удаляем класс active для текущего li
      items2.classList.remove("active");
      
      // закрываем текущий блок с контентом
      contents2.style.height = null;
    }
  }
});


 //Contacts-Map


 ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.94554327989287,30.38935262114668], 
            zoom: 11, 
            controls: []
        });

myMap.behaviors.disable('scrollZoom');

    var coords = [
    [59.94554327989287,30.38935262114668], 
    [59.91142323563909,30.50024587065841], 
    [59.88693161784606,30.319658102103713],
    [59.97033574821672,30.315194906302924]
],
    myCollection = new ymaps.GeoObjectCollection({}, {
       	iconLayout: 'default#image',
        iconImageHref: '../img/icons/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-26, -52]
    });

for (var i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
}

myMap.geoObjects.add(myCollection);
}




//FORM




