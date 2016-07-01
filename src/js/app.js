// Open drawer to display menu on clicking hamburger icon
menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
  document.body.style.overflow = "hidden";
});

// Close drawer upon clicking drawer
drawer.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
  document.body.style.overflow = "visible";
});

// Cache a reference to the modal
var modal = document.getElementById('project-modal');

// Cache a reference to the button that opens the surflist modal
var surflistBtn = document.getElementById("surflist-button");

// Save a ref to the close modal button
var closeModalBtn = document.getElementsByClassName("close")[0];

// Open the modal when the btn in clicked
surflistBtn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

// Close the modal when the close modal button is clicked
closeModalBtn.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "visible";
};

// Close the modal when user clicks anywhere outside of it
window.onclick = function(e) {
  if(e.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  }
};