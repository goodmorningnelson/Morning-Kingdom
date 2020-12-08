
// DARKTHEME TOGGLE
function themeToggle() {
    document.body.classList.toggle('darkTheme')
};



//MODAL


// Variables 
var modal = document.getElementsByClassName("modal");
var modalDragger = document.getElementsByClassName("dragger");

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





// Wrap the module in a self-executing anonymous function
// to avoid leaking variables into global scope:
// eslint-disable-next-line wrap-iife
(function (document) {
    // Enable ECMAScript 5 strict mode within this function:
    'use strict';
    // Obtain a node list of all elements that have class="modal":
    var draggable = document.getElementsByClassName('modal'),
        draggableCount = draggable.length, // cache the length
        i; // iterator placeholder
        /* console.log('sfjhbsf', draggable) */
    // Obtain a node list of all elements that have class="dragger":
    var dragHandle = document.getElementsByClassName('dragger'),
        dragHandleCount = dragHandle.length, // cache the length
        i; // iterator placeholder
    // This function initializes the drag of an element where an
    // event ("mousedown") has occurred:
    function startDrag(evt, i) {
        // The element's position is based on its top left corner,
        // but the mouse coordinates are inside of it, so we need
        // to calculate the positioning difference:
       /*  console.log('sbfjsfbsjbfj', dragHandle.length)
            console.log('sbfjsfbsjbfj',draggable.length) */
            // "this" refers to the current element,
        var diffX = evt.clientX - draggable[i].offsetLeft,
            diffY = evt.clientY - draggable[i].offsetTop,
            that = draggable[i];
                         // let's keep it in cache for later use.
        // moveAlong places the current element (referenced by "that")
        // according to the current cursor position:
        function moveAlong(evt) {
            that.style.left = (evt.clientX - diffX) + 'px';
            that.style.top = (evt.clientY - diffY) + 'px';
        }
        // stopDrag removes event listeners from the element,
        // thus stopping the drag:
        function stopDrag() {
            document.removeEventListener('mousemove', moveAlong);
            document.removeEventListener('mouseup', stopDrag);
        }
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('mousemove', moveAlong);
    }
    // Now that all the variables and functions are created,
    // we can go on and make the elements draggable by assigning
    // a "startDrag" function to a "mousedown" event that occurs
    // on those elements:
  /*   console.log('skfkdnkdf', dragHandle) */
    Array.from(dragHandle).forEach((item, index) => {
        item.addEventListener('mousedown', (evt) => startDrag(evt, index));
    });
  }(document));