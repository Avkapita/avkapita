var accordion = document.getElementById('team-accordion');

var i;

accordion.addEventListener('click', function(e) {
  // console.log("this");
  // console.log(this);
  // console.log("e.target");
  // console.log(e.target);
  if (e.target.classList.contains('team-acc__trigger') ) {
    var trigger = e.target;
    var content = trigger.nextElementSibling;
    
    if (content.style.height) {
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + 'px';      
    }
  }

});
