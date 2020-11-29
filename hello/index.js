
// DARKTHEME TOGGLE
function themeToggle() {
    document.body.classList.toggle('darkTheme')
};



//MODAL


// Variables 
var modal = document.getElementsByClassName("modal");

var modalTrigger = document.getElementsByClassName("modalTrigger");

var modalClose = document.getElementsByClassName("closeModal");

// Click event when clicking on a trigger (for a class)
for (var i = 0 ; i < modalTrigger.length; i++) {
    modalTrigger[i].addEventListener('click' , modalShow); 

    
}

//Called by the previous function
//adds the "modalShow" class to the target modal. by ID
//Sets focus
function modalShow() {
    var x = this.getAttribute("target");
    var targetModal = document.getElementById(x);

    //toggles the class "modalShow" on the target modal
    targetModal.classList.toggle("modalShow");

    //on "modalShow" sets the focus.
    if (targetModal.classList.contains("modalShow")) {
       targetModal.focus();
    }
};



//function to close the modal.
function closeModal() {
    for (var i = 0 ; i < modal.length; i++) {
        modal[i].classList.remove("modalShow"); 
    }   
};

//function to close ALL modal on escape keydown.
document.addEventListener("keydown", ({key}) => {
    if (key === "Escape") {
        closeModal();
    }
})

//function called when closing a modal manually. 
function closeMe(targetModal) {
    document.getElementById(targetModal).classList.toggle("modalShow")
};

//hide initial tutorial text on first modal open.
function endTuto() {
    document.getElementById("tuto1").style.display = "none";
    document.getElementById("tuto2").style.display = "none";
}


//DRAGGABLE
var x, y, target = null;

document.addEventListener('mousedown', function(e) {
  var clickedDragger = false;
  for(var i = 0; e.path[i] !== document.body; i++) {
    if (e.path[i].classList.contains('dragger')) {
      clickedDragger = true;
    }
    else if (clickedDragger && e.path[i].classList.contains('modal')) {
      target = e.path[i];
      target.classList.add('dragging');
      x = e.clientX - target.style.left.slice(0, -2);
      y = e.clientY - target.style.top.slice(0, -2);
      return;
    }
  }
});

document.addEventListener('mouseup', function() {
  if (target !== null) target.classList.remove('dragging');
  target = null;
});

document.addEventListener('mousemove', function(e) {
  if (target === null) return;
  target.style.left = e.clientX - x + 'px';
  target.style.top = e.clientY - y + 'px';
  var pRect = target.parentElement.getBoundingClientRect();
  var tgtRect = target.getBoundingClientRect();

  if (tgtRect.left < pRect.left) target.style.left = 0;
  if (tgtRect.top < pRect.top) target.style.top = 0;
  if (tgtRect.right > pRect.right) target.style.left = pRect.width - tgtRect.width + 'px';
  if (tgtRect.bottom > pRect.bottom) target.style.top = pRect.height - tgtRect.height + 'px';
});

