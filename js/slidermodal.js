
//////SLIDER - MODAL
var ingredients = document.querySelector(".ingredients");


ingredients.addEventListener("click", function(e) {


 
  if (e.target.classList.contains("ingredients") || e.target.classList.contains("ingr-title")) { 
  
    var trigger;
    
    
    if (!e.target.classList.contains("ingr-title")) { 
      trigger = e.target;
      console.log(trigger);
    } else { 
      trigger = e.target.parentNode;
      console.log(trigger);
    }
    
    var ingrModal = trigger.nextElementSibling;
  

    console.log(ingrModal);   
    
    
    if (!ingrModal.classList.contains("active")) { 
   
      
        ingrModal.classList.add("active");
      
      
    } else { 
      ingrModal.classList.remove("active");
      
      
    
    }
  }

});




