var projectInfo = {
    "projects": [
        {
          "modalBanner": "/img/surflist_banner.svg",
          "projectName": "SURFLIST",
          "projectDescription":
              "This is a single-page, responsive web application built from scratch where surfers can discover waves that fit their individual needs and criteria. Users can find a new wave break simply by scrolling through the list of locations. Locations are also searchable and can be explored via Google maps.",
          "bulletDescriptions": [
              "JavaScript design patterns",
              "JavaScript frameworks such as Knockout.js (MVVM)",
              "loading data via AJAX requests",
              "implementation of third-party APIs",
              "storing assets to local storage for faster loading",
              "caching application assets and files for faster loading",
              "building with Grunt and Node.js modules for streamlining the build process",
              "implementing image sprite sheets as well as external svg sprite sheets",
              "utilizing Firebase for hosting, user authentication, and back-end data storage"
          ],
          "externalLink": "https://dazzling-torch-4012.firebaseapp.com/"
        }
    ]
};

var $ = function(name) {

  if(name.indexOf('#') > -1) {
      var id = removeChar(name);
      var elemId = document.getElementById(id);
      return elemId;
  } else {
      var clss = removeChar(name);
      var elemClass = document.getElementsByClassName(clss)[0];
      return elemClass;
  }

  function removeChar(name) {
    var newName = name.substr(1);
    return newName;
  }
};

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
var modal = $('#project-modal');

// Cache a reference to the button that opens the surflist modal
var surflistBtn = $('#surflist-button');

// Save a ref to the close modal button
var closeModalBtn = $('.close');

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