/* tools */

// Select elements by class or id
// This mimics jQuery selection of DOM elements
var $ = function(name) {

  // If the name passed has a '#' character, it is an id
  // Remove '#', select the element in the DOM, and return it
  if(name.indexOf('#') > -1) {
    var id = removeChar(name),
        elem = document.getElementById(id);
    return elem;

  // If the name passed doesn't have '#', it is a class '.'
  // Remove '.'
  } else {
    var clss = removeChar(name),
        elems = document.getElementsByClassName(clss);

    // If the elems element has more the one class in the array
    // return the whole array of DOM elements
    if(elems.length > 1) {
      return elems;

    // If the elems element has only one class return the class not as
    // an array, but rather the DOM element
    } else {
      return elems[0];
    }
}

  // Remove the first character of a string and return the string
  function removeChar(name) {
    var newName = name.substr(1);
    return newName;
  }
};

// Append content to existing element
// This mimics jQuery's append method by passing the selected element and
// the content one wishes to attach to it
var append = function(elem, content) {

  // If the element is an array of elements, iterate through them and
  // add the content
  if(Array.isArray(elem)) {

    // Save a reference to the length of the array
    var elemLength = elem.length;

    // Iterate through the array and add the content to each element
    for(i = elemLength; i--;) {
      elem[i].innerHTML += content;
    }

  // If the element isn't an array, simply add the content to it
  } else {

    elem.innerHTML += content;
  }
};

// Clear content within an existing element
var clear = function(elem) {

  // If the element is an array of elements, iterate through them and
  // clear the content
  if(Array.isArray(elem)) {

    // Save a reference to the length of the array
    var elemLength = elem.length;

    // Iterate through the array and clear the content from each element
    for(i = elemLength; i--;) {
      elem[i].innerHTML = "";
    }

  // If the element isn't an array, simply add the content to it
  } else {

    elem.innerHTML = "";
  }
};

// Get a specific child element
var getNthChild = function(elem, index) {

  // If the element is an array of elements, just return as I can't think
  // of a moment when I would need to get a specific child for a whole class
  // of elements!
  if(Array.isArray(elem)) {

    return;
  // If the element isn't an array, get the child of it according to the index
  // number passed as a parameter
  } else {

    // Save a reference to the child element
    var child = elem.childNodes[index];
    return child;
  }
};

// Model data
var projects = {
    "project": [
        {
          "projectName": "SURFLIST",
          "modalBanner": "/img/surflist_banner.svg",
          "bannerDescription": "surflist banner",
          "shortDescription": "made a wave finder app for surfers",
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
          "bannerDescription": "cartman crush banner",
          "shortDescription": "created a frogger-like arcade game",
          "projectDescription":
              "This is a desktop-based Frogger-like game where the player, Eric Cartman, must navigate a street filled with killer bugs in order to reach the water on the opposite side.",
          "infoBullets": [
              "closures",
              "object prototype chains",
              "variable scope",
              "HTML5 Canvas for game animation"
          ],
          "externalLink": "https://ndnewell.github.io/frontend-nanodegree-arcade-game/"
        },
        {
          "projectName": "UdaciFeeds",
          "modalBanner": "/img/udacifeeds.svg",
          "bannerDescription": "udacifeeds banner",
          "shortDescription": "completed testing for this web app",
          "projectDescription":
              "This project consisted of being given a web-based application that reads RSS feeds. The original developer included an incomplete testing suite using Jasmine. The project aim was to complete the testing suite by writing tests that pass.",
          "infoBullets": [
              "ensuring loops work properly",
              "determining if URLs are defined",
              "checking if name fields are completed",
              "ensuring the menu element is hidden by default",
              "checking if the menu changes visiblity when clicked",
              "making sure the feeds load properly"
          ],
          "externalLink": " http://NDNewell.github.io/frontend-nanodegree-feedreader"
        },
        {
          "projectName": "Web Performance Optimization",
          "modalBanner": "/img/perfopt.jpg",
          "bannerDescription": "web performance optimization banner",
          "shortDescription": "optimized loading and performance",
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

// Cache a reference to elements needed to construct project elems
// as well as the project modals
var $projects = $('.projects'),
    $modal = $('#project-modal'),
    $modalBody = $('.modal-body'),
    $closeModalBtn = $('.close');

// Self executing function that populates the DOM with project a list of
// completed projects
var projectsConstructor = (function() {

  // Add a card to the projects section
  append($projects, '<div class="card">');

  // Save a reference to the project section's card
  var $projectsCard = getNthChild($projects, 0);

  // Add a heading to the project section
  append($projectsCard, '<h3>-work-</h3>');

  // Cache the length of the project data
  var projectsLength = projects.project.length;

  // Loop through the project data and populate the project section with
  // project data
  for(i = 0; i < projectsLength; i++) {

    // Save a reference to the currently iterated project
    var project = projects.project[i];

    // Add the project card for the currently iterated projectc
    append($projectsCard, '<div class="' + project.cssLabel + ' project"><img src="' + project.modalBanner + '" alt="' + project.bannerDescription + '"><p>' + project.shortDescription + '</p><button type="button" class="info-btn">more info</button></div>');
  }

  // Save a ref to the more info button on the currently iterated project
  var $moreInfoBtn = $('.info-btn'),

      // Save a ref to the number of more info buttons
      $moreInfoBtnLength = $moreInfoBtn.length;

  // Iterate through the more info buttons and add a listener for opening
  // each project's respective modal
  for(var i = 0; i < $moreInfoBtnLength; i++) {

    // Save a ref to the the project of the currently iterated button
    // Note: The first button to be iterated over is on the same project card
    // as the first project object in the projects object array, so the index
    // number for the buttons are the same and can be used to attach the data
    // to the evt listener
    var selectProject = projects.project[i];

    // Pass the currently iterated button and project to add evt listeners
    addListener($moreInfoBtn[i], selectProject);
  }

  // Add event listeners to each button
  // Each button will call populate the modal with the appropriate data and
  // make the modal visible
  function addListener(btn, selectProject) {

    // Add an event listener to the currently iterated button and pass
    // the currently iterated project to the inner function
    btn.addEventListener('click', (function(e) {

      // Use a closure to save the current state of data passed to the evt
      // listener
      return function (project) {

        // Construct the modal with the currently iterated project data
        modalContructor(selectProject);

        // Show the modal
        $modal.style.display = "block";

        // Disable scrolling for the main page
        document.body.style.overflow = "hidden";
      };
    })(selectProject));
  }
})();

// Populate modal with project data
// Pass the currently iterated project from the projects constructor
var modalContructor = function (project) {

  // Add necessary DOM elements for constructing the modal
  // Add project information to each section

  // Add banner image for the project
  append($modalBody, '<img src="' + project.modalBanner + '" alt="' + project.bannerDescription + '">');

  // Add the project name
  append($modalBody, '<h3>' + project.projectName + '</h3>');

  // Add the project description
  append($modalBody, '<p>' + project.projectDescription + '</p>');

  // Add a header for the list of project bullet points
  append($modalBody, '<hX>The project focused on:</hX>');

  // Create an empty unordered list
  append($modalBody, '<ul></ul>');

  // Cache ref to unordered list
  var infoBulletsLength = project.infoBullets.length,
      projectBullets = getNthChild($modalBody, 4);

  // Add project bullet info to the unordered list
  for (var i = 0; i < infoBulletsLength; i++) {
    append(projectBullets, '<li>' + project.infoBullets[i] + '</li>');
  }

  // Add a container to hold an svg image link to the project
  append($modalBody, '<div class="link-container"></div>');

  // Save a ref to the link container
  var $modalLinkContainer = $('.link-container');

  // Add a link to the project that opens in a new window
  append($modalLinkContainer, '<a href="' + project.externalLink + '" target="_blank"><img src="/img/publish.svg" alt="link to project icon"></a>');
};

// Close the modal when the close modal button is clicked
$closeModalBtn.onclick = function() {

  // Clear modal of all data
  clearModal();
};

// Close the modal when user clicks anywhere outside of it
window.onclick = function(e) {

  // If clicking the outside of the modal, close it
  if(e.target == $modal) {

    // Clear modal of all data
    clearModal();
  }
};

function clearModal() {

    // Clear the modal when closing it
    clear($modalBody);

    // Hide the modal
    $modal.style.display = "none";

    // Re-enable scrolling for main page
    document.body.style.overflow = "visible";
}


