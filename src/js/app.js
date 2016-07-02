/* tools */



// Select elements by class or id
var $ = function(name) {

  if(name.indexOf('#') > -1) {
      var id = removeChar(name),
          elemId = document.getElementById(id);
      return elemId;
  } else {
      var clss = removeChar(name),
          elemClass = document.getElementsByClassName(clss)[0];
      return elemClass;
  }

  function removeChar(name) {
    var newName = name.substr(1);
    return newName;
  }
};

// Append content to existing element
var append = function(elem, content) {
  elem.innerHTML += content;
};

// Get a specific child element
var getNthChild = function(elem, index) {
  var child = elem.childNodes[index];
  return child;
};



/* model */



var projects = {
    "project": [
        {
          "projectName": "SURFLIST",
          "modalBanner": "/img/surflist_banner.svg",
          "projectDescription":
              "This is a single-page, responsive web application built from scratch where surfers can discover waves that fit their individual needs and criteria. Users can find a new wave break simply by scrolling through the list of locations. Locations are also searchable and can be explored via Google maps.",
          "infoBullets": [
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



/* view */



var modalContructor = function () {

  append(modalBody, '<img src="' + projects.project[0].modalBanner + '" alt="surflist project modal banner">');
  append(modalBody, '<h3>' + projects.project[0].projectName + '</h3>');
  append(modalBody, '<p>' + projects.project[0].projectDescription + '</p>');
  append(modalBody, '<hX>The project focused on:</hX>');
  append(modalBody, '<ul></ul>');

  var infoBulletsLength = projects.project[0].infoBullets.length;
  var projectBullets = getNthChild(modalBody, 4);

  for (var i = 0; i < infoBulletsLength; i++) {
    append(projectBullets, '<li>' + projects.project[0].infoBullets[i] + '</li>');
  }

  append(modalBody, '<div class="link-container"></div>');

  var modalLinkContainer = $('.link-container');

  append(modalLinkContainer, '<a href="' + projects.project[0].externalLink + '" target="_blank"><img src="/img/publish.svg" alt="link to project icon"></a>');
};



/* controllers */



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

// Cache a reference to elements
var modal = $('#project-modal'),
    surflistBtn = $('#surflist-button'),
    closeModalBtn = $('.close'),
    modalBody = $('.modal-body');

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


modalContructor();





