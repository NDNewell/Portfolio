/* tools */



// Select elements by class or id
var $ = function(name) {

  if(name.indexOf('#') > -1) {
    var id = removeChar(name),
        elem = document.getElementById(id);
    return elem;
  } else {
    var clss = removeChar(name),
        elems = document.getElementsByClassName(clss);

    if(elems.length > 1) {
      return elems;
    } else {
      return elems[0];
    }
}

  function removeChar(name) {
    var newName = name.substr(1);
    return newName;
  }
};

// Append content to existing element
var append = function(elem, content) {

  if(Array.isArray(elem)) {

    var elemLength = elem.length;

    for(i = elemLength; i--;) {
      elem[i].innerHTML += content;
    }

  } else {

    elem.innerHTML += content;

  }
};

// Clear content within an existing element
var clear = function(elem) {

  if(Array.isArray(elem)) {

    var elemLength = elem.length;

    for(i = elemLength; i--;) {
      elem[i].innerHTML = "";
    }

  } else {

    elem.innerHTML = "";

  }
};

// Get a specific child element
var getNthChild = function(elem, index) {

  if(Array.isArray(elem)) {

    console.log('error: cannot get child for all elements');

  } else {

    var child = elem.childNodes[index];
    return child;

  }
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
        },
        {
          "projectName": "CARTMAN CRUSH",
          "modalBanner": "/img/cartmancrush_banner.png",
          "projectDescription":
              "This is a desktop-based Frogger-like game where the player, Eric Cartman, must navigate a street filled with killer bugs in order to reach the water on the opposite side.",
          "infoBullets": [
              "closures",
              "JavaScript frameworks such as Knockout.js (MVVM)",
              "object prototype chains",
              "variable scope",
              "HTML5 Canvas for game animation"
          ],
          "externalLink": "https://ndnewell.github.io/frontend-nanodegree-arcade-game/"
        },
        {
          "projectName": "UdaciFeeds",
          "modalBanner": "/img/udacifeeds.svg",
          "projectDescription":
              "This project consisted of being given a web-based application that reads RSS feeds. The original developer included an incomplete testing suite using Jasmine. The project aim was to complete the testing suite by writing tests that pass.",
          "infoBullets": [
              "writing a test that ensures loops work properly",
              "writing a test that determines if URLs are defined",
              "writing a test that checks if name fields are completed",
              "writing a test that ensures the menu element is hidden by default",
              "writing a test that checks if the menu changes visiblity when clicked",
              "writing a test that makes sure the feeds load properly"
          ],
          "externalLink": "https://github.com/NDNewell/frontend-nanodegree-feedreader"
        },
        {
          "projectName": "Web Performance Optimization",
          "modalBanner": "/img/perfopt.jpg",
          "projectDescription":
              "This project involved being provided two websites with performance related issues. For Cam's Profile website, the goal was to optimize the page loading speed to a PageSpeed score of above 90. For Cam's Pizzeria website, the goal was to increase the frames per second (FPS) to 60+ by reviewing and replacing inefficient code with more succinct constructions.",
          "infoBullets": [
              "optimization of the critical rendering path (CRP)",
              "profiling sites through a mobile phone via Chrome Canary",
              "optimizing the DOM",
              "unblocking CSS with media queries",
              "asyncing JavaScript",
              "workflow (Gulp and Grunt)"
          ],
          "externalLink": "https://ndnewell.github.io/frontend-nanodegree-mobile-portfolio"
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
    moreInfoBtn = $('.more-info-btn'),
    closeModalBtn = $('.close'),
    modalBody = $('.modal-body');

function showModal(i) {
  moreInfoBtn[i].addEventListener('click', (function(e) {
    return function (e) {
      console.log(e);
      modalContructor();
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    };
  })(i));
}

// Add event listeners for each project
for (i = moreInfoBtn.length; i--;) {
  showModal(i);
}

// Close the modal when the close modal button is clicked
closeModalBtn.onclick = function() {
  clear(modalBody);
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





