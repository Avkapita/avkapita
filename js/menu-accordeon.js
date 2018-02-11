var accordion = document.getElementById('menu-accordion');

var i;

accordion.addEventListener('click', function(e) {
  //console.log("this");
   //console.log(this);
  //console.log("e.target");
  // console.log(e.target);
  if (e.target.classList.contains('acc-menu__trigger') ) {
    var trigger = e.target;
    var content = trigger.nextElementSibling;
    
    if (content.style.width) {
      content.style.width = null;
    } else {
      content.style.width = '520px';
     
    }
  }

});
