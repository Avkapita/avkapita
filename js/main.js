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



///////Slider - ingredients - modal
var ingredients = document.querySelector('.ingredients'),
opacity = document.getElementById('ingr-modal').style.opacity,
opacCount = 0;


ingredients.addEventListener('click', function (e) {
    e.preventDefault();

    if (opacCount < 1 && opacity < 1){

       opacity=1;
       opacCount++;
    } 
    

    else {
    	opacity=0;
        opacCount--;
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


/////Menu-vertical-accordeon

var accordion = document.getElementById("menu-accordion"),
    items = accordion.getElementsByClassName("acc-menu__item"),
    contents = accordion.getElementsByClassName("acc-menu__content"),

     i;

accordion.addEventListener('click', function(e) {
  if (e.target.classList.contains("acc-menu__trigger") ) {
    var trigger = e.target;
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
        contents[i].style.offsetWidth = null;
      }
      // открываем текущий блок с контентом
      content.style.offsetWidth = content.offsetWidth + "px";
      
    } else { // активный
      // удаляем класс active для текущего li
      item.classList.remove("active");
      
      // закрываем текущий блок с контентом
      content.style.offsetWidth = null;
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





//Order - Form - modal

var formOverlay = document.getElementById('form-overlay');

var submitButton = document.getElementById('form-submit');

submitButton.addEventListener('click', function(e) {
     (e).preventDefault;
	  // добавляем active для текущего li
      formOverlay.classList.add("active");

         
     }
);


