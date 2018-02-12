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


// общие переменные должны отличаться названиями от первого аккордеона
// переменные внутри обработчика событий могут быть такими же
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
