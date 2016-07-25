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

// Clear content within an existing element
var clear = function(elem) {

  // If the element is an array of elements, iterate through them and
  // clear the content
  if(Array.isArray(elem)) {

    // Save a reference to the length of the array
    var elemLength = elem.length;

    // Iterate through the array and clear the content from each element
    for(var i = elemLength; i--;) {
      elem[i].textContent = "";
    }

  // If the element isn't an array, simply add the content to it
  } else {

    elem.textContent = "";
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
          "modalBanner": '<img alt="surflist banner" src="img/surflist_banner.png">',
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
          "externalLink": "https://dazzling-torch-4012.firebaseapp.com/",
          "githubLink": "https://github.com/NDNewell/frontend-nanodegree-map-project",
          "cssClass": "surflist"
        },
        {
          "projectName": "CARTMAN CRUSH",
          "modalBanner": '<img alt="cartman crush banner" src="img/cartmancrush_banner.png">',
          "shortDescription": "created a frogger-like arcade game",
          "projectDescription":
              "This is a desktop-based Frogger-like game where the player, Eric Cartman, must navigate a street filled with killer bugs in order to reach the water on the opposite side.",
          "infoBullets": [
              "closures",
              "object prototype chains",
              "variable scope",
              "HTML5 Canvas for game animation"
          ],
          "externalLink": "https://ndnewell.github.io/frontend-nanodegree-arcade-game/",
          "githubLink": "https://github.com/NDNewell/frontend-nanodegree-arcade-game",
          "cssClass": "ccrush"
        },
        {
          "projectName": "UdaciFeeds",
          "modalBanner": '<img alt="udacifeeds banner" src="img/udacifeeds.svg">',
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
          "externalLink": "http://NDNewell.github.io/frontend-nanodegree-feedreader",
          "githubLink": "https://github.com/NDNewell/frontend-nanodegree-feedreader",
          "cssClass": "udacifeeds"
        },
        {
          "projectName": "Web Performance Optimization",
          "modalBanner": '<img alt="web performance optimization banner" src="img/perfopt.jpg">',
          "shortDescription": "optimized loading and performance",
          "projectDescription":
              "This project involved being provided two websites with performance related issues. For Cam's Profile website, the goal was to optimize the page loading speed to a PageSpeed score of above 90. For Cam's Pizzeria website, the goal was to increase the frames per second (FPS) to 60+ by reviewing and replacing inefficient code with more succinct constructions.",
          "infoBullets": [
              "optimization of the critical rendering path (CRP)",
              "profiling sites through a mobile phone via Chrome Canary",
              "optimizing the DOM",
              "unblocking CSS with media queries",
              "asyncing JavaScript",
              "workflow (Gulp and Grunt)",
              "calculating CRP metrics"
          ],
          "externalLink": "https://ndnewell.github.io/frontend-nanodegree-mobile-portfolio",
          "githubLink": "https://github.com/NDNewell/frontend-nanodegree-mobile-portfolio",
          "cssClass": "perf"
        }
    ]
};

// Check if device has touchscreen
var touchScreen = (function() {

  if('ontouchstart' in document.documentElement) {

    console.log('device supports touch events');

    return true;

  } else {

    return false;
  }
})();

// Toggle opening and closing the menu drawer
document.addEventListener('click', function(e) {

  // Open menu if hamburger icon is clicked
  if(e.target.closest("#hamburger")) {

    drawer.classList.toggle('open');

    if(window.innerWidth <= 768) {

      document.body.style.overflow = "hidden";
    }

  // Close menu if drawer or link is clicked
  } else if (e.target.closest("#drawer")) {

    drawer.classList.toggle('open');

    if(window.innerWidth <= 768)  {

      document.body.style.overflow = "visible";
    }

  // Close menu if user clicks outside the drawer
  } else if (!e.target.closest("#hamburger")) {

    $("#drawer").className = "";
  }
});

// Cache a reference to elements needed to construct project elems
// as well as the project modals
var $projectSection = $('.projects'),
    $modal = $('#project-modal'),
    $modalContainer = $('.modal-container'),
    $modalBody = $('.modal-body'),
    $modalContent = $('.modal-content'),
    $closeModalBtn = $('.close');

// Self executing function that populates the DOM with project a list of
// completed projects
var projectsConstructor = (function() {

  // Add a container card to the projects section
  $projectSection.insertAdjacentHTML('beforeend', '<div class="projects-card card"></div>');

  // Save a reference to the project section's card
  var $projectsCard = $(".projects-card");

  // Add a projects container to hold the project cards
  $projectsCard.insertAdjacentHTML('beforeend', '<div class="projects-container"></div>');

  // Save a reference to the project container
  var $projectsContainer = $(".projects-container");

  // Cache the length of the project data
  var projectsLength = projects.project.length;

  // Loop through the project data and populate the project section with
  // project data
  for(i = 0; i < projectsLength; i++) {

    // Save a reference to the currently iterated project
    var project = projects.project[i];

    // Add projects to the work section
    loadProjects(project);
  }

  // Load project cards to the work section
  function loadProjects(project) {

    // Create a project card and add to the projects container
    $projectsContainer.insertAdjacentHTML('beforeend', '<div class="' + project.cssClass + '-card project-wrapper"></div>');

    // Save ref to the current project card
    var $projectCard = $("." + project.cssClass + "-card");

    // Add the projects banner image
    $projectCard.insertAdjacentHTML('beforeend', project.modalBanner);

    $projectCard.insertAdjacentHTML('beforeend', '<div class="text-container"></div>');

    $flexContainer = getNthChild($projectCard, 1);

    $flexContainer.insertAdjacentHTML('beforeend', '<div class="text-wrapper"></div>');

    $hoverTextContainer = getNthChild($flexContainer, 0);

    $hoverTextContainer.insertAdjacentHTML('beforeend', '<p>' + project.shortDescription + '</p>');

    // Pass the currently iterated button and project to add evt listeners
    addListener($projectCard, project);
  }

  // Add event listeners to each button
  // Each button will populate the modal with the appropriate data and
  // make the modal visible
  function addListener(card, project) {

    // Add an event listener to the currently iterated button and pass
    // the currently iterated project to the inner function
    card.addEventListener('click', (function(e) {

      // Use a closure to save the current state of data passed to the evt
      // listener
      return function () {

        // Construct the modal with the currently iterated project data
        modalConstructor(project);

      };
    })(project));
  }
})();

// Populate modal with project data
// Pass the currently iterated project from the projects constructor
var modalConstructor = function (project) {

  // If on a mobile device, set the location hash
  if(touchScreen && window.innerWidth <= 768) {

    // Set location hash;
    location.hash = project.cssClass;
  }

  // Show the modal
  $modal.style.display = "block";

  // Hide the main page if modal takes up whole screen
  if(window.innerWidth <= 768)  {
    $(".container").style.display = "none";
  }

  // Disable overflow
  document.body.style.overflow = "hidden";

  // Add necessary DOM elements for constructing the modal
  // Add project information to each section

  // Add an image container for the project banner
  $modalBody.insertAdjacentHTML('beforeend', '<div class="modal-img-container"></div>');

  // Save a ref to the img container
  var $imgContainer = $(".modal-img-container");

  // Add banner image for the project
  $imgContainer.insertAdjacentHTML('beforeend', project.modalBanner);

  // Add an txt container for the project banner
  $modalBody.insertAdjacentHTML('beforeend', '<div class="modal-txt-container"></div>');

  // Save a ref to the img container
  var $txtContainer = $(".modal-txt-container");

  // Add the project name
  $txtContainer.insertAdjacentHTML('beforeend', '<h3>' + project.projectName + '</h3>');

  // Add the project description
  $txtContainer.insertAdjacentHTML('beforeend', '<p>' + project.projectDescription + '</p>');

  // Add a header for the list of project bullet points
  $txtContainer.insertAdjacentHTML('beforeend', '<hX>The project focused on:</hX>');

  // Create an empty unordered list
  $txtContainer.insertAdjacentHTML('beforeend', '<ul class="' + project.cssClass + '-ul-list"></ul>');

  // Cache ref to unordered list
  var infoBulletsLength = project.infoBullets.length,
      $listHead = $("." + project.cssClass + "-ul-list");

  // Add project bullet info to the unordered list
  for (var i = 0; i < infoBulletsLength; i++) {

    $listHead.insertAdjacentHTML('beforeend', '<li>' + project.infoBullets[i] + '</li>');
  }

  // Add a container to hold an svg image link to the project
  $txtContainer.insertAdjacentHTML('beforeend', '<div class="link-container"></div>');

  // Save a ref to the link container
  var $modalLinkContainer = $(".link-container");

  // Add a link to the project that opens in a new window
  $modalLinkContainer.insertAdjacentHTML('beforeend', '<a href="'+ project.externalLink + '" target="_blank" class="ext-link"></a>');

  // Save a ref to external link elem
  $extLinkElem = $(".ext-link");

  // Add img that opens the external link when clicked
  $extLinkElem.insertAdjacentHTML('beforeend', '<svg alt="link to project icon"><use xlink:href="#publish"/></svg>');

  // Add a link to the project that opens in a new window
  $modalLinkContainer.insertAdjacentHTML('beforeend', '<a href="'+ project.githubLink + '" target="_blank" class="gh-link"></a>');

  // Save a ref to external link elem
  $ghLinkElem = $(".gh-link");

  // Add img that opens the external link when clicked
  $ghLinkElem.insertAdjacentHTML('beforeend', '<svg alt="link to github repository icon"><use xlink:href="#github"/></svg>');

  // Scroll to top of the modal page once modal is constructed if on a small
  // device
  if(window.innerWidth <= 768) {

      var setScrollTop = setInterval(function() {

        if($modalContent.scrollHeight > 0) {

          clearInterval(setScrollTop);

          $modalContent.scrollTop = 0;
        }

      }, 100);
  }
};

// Close the modal when the close modal button is clicked
$closeModalBtn.addEventListener("click", function(e) {

  // Clear modal of all data
  clearModal();

});

// Close the modal when user clicks anywhere outside of it
window.addEventListener("click", function(e) {

  // If clicking the outside of the modal, close it
  if(e.target == $modalContainer) {

    // Clear modal of all data
    clearModal();
  }
});

function clearModal() {

  // Using a mobile device and not at the pages base location hash 'home'
  // Go back to previous location hash 'home'
  if(location.hash !== "#home" && touchScreen && window.innerWidth <= 768) {

    // Set location hash back to home
    window.history.back();
  }

  // Clear the modal when closing it
  clear($modalBody);

  // Hide the modal
  $modal.style.display = "none";

  // Show the container if hidden
  if($('.container').offsetLeft <= 0)  {

    $(".container").style.display = "block";
  }

  // Re-enable overflow
  document.body.style.overflow = "visible";
}

// Create refs to portfolio sections and menu links
var $sliderMenu = getNthChild($("#drawer"), 0),
    $menuAbout = getNthChild($sliderMenu, 0),
    $menuWork = getNthChild($sliderMenu, 1),
    $menuSkills = getNthChild($sliderMenu, 2),
    $body = document.getElementsByTagName("BODY")[0],
    $projectSection = $(".projects"),
    $skillsSection = $(".stack"),
    $aboutSection = $(".about");

// Add event listeners to each menu link
// When clicking a link, the page is scrolled to the appropriate section
$menuAbout.addEventListener("click", function(e) {

  window.scroll(0, $aboutSection.offsetTop + 2);
});

$menuSkills.addEventListener("click", function(e) {

  window.scroll(0, $skillsSection.offsetTop + 2);
});

$menuWork.addEventListener("click", function(e) {

  window.scroll(0, $projectSection.offsetTop + 2);
});

document.addEventListener("DOMContentLoaded", function () {

    var data,
        xhr,
        localStorageEnabled = true;

    try {

      var localStorage = window.localStorage,
          portPicsVersionCached = localStorage.getItem('portPicsVersion'),
          portPicsVersion = 2;

      if(portPicsVersionCached == portPicsVersion) {

        console.log('get external svg sprite sheet from local storage');

        data = localStorage.portfolioSVGdata;

        inlineSVGSprites(data);

      } else if (portPicsVersionCached !== portPicsVersion || portPicsVersionCached === null) {

        getSVGData();

      }

    } catch (e) {

        console.log('local storage disabled (' + e + ')');

        localStorageEnabled = false;

        getSVGData();
    }

    function getSVGData() {

      var readError = setTimeout(function() {
          console.log('get external svg sprite sheet failed');
      }, 5000);

      xhr = new XMLHttpRequest();
      xhr.open('GET', 'img/svg_sprites.svg', true);
      xhr.onload = function () {

        if(xhr.status >= 200 && xhr.status < 400) {

          data = xhr.responseText;

          clearTimeout(readError);

          console.log('get external svg sprite sheet from server');

          // Load sprites into the DOM
          inlineSVGSprites(data);

          // If local storage is available save the external sprite
          // sheet as well as its current version number.
          if(localStorageEnabled) {
              saveSVGData(data);
          }
        }
      };
      xhr.send();
    }

    // Load the external svg sprite sheet into the DOM so that it
    // is an inlined svg sprite sheet
    function inlineSVGSprites(data) {

        // After inlining, hide it
        $body.insertAdjacentHTML('afterbegin', data);

        var $svgSprites = getNthChild($body, 0);

        $svgSprites.style.display = "none";
    }

    // Save the external svg sprite sheet to local storage
    function saveSVGData(data) {

        console.log('save external svg sprite sheet to local storage');

        localStorage.portfolioSVGdata = data;
        localStorage.portPicsVersion = portPicsVersion;
    }
});

// Save a ref to all of the menu icon and the length of their classname array
var $menuIcon = $('.menu-icon'),
    menuIconLgth = $menuIcon.length;

// Add a listener to each menu icon
for(var i = menuIconLgth; i--;) {

  var $icon = $menuIcon[i];

  addMenuListeners($icon);
}

// Attach listeners that detect when the mouse hovers over the menu icon.
// When hovering over the icon, change the fill colour in order to highlight
// it. This is done by toggling a class with the new fill colour.
// This is specifically used to address Moz Frfx's failure to highlight the
// icon over transparent gaps in the svg when using the 'hover' pseudo
// property in CSS.
function addMenuListeners () {

  $icon.addEventListener("mouseenter", function(e) {

    this.classList.toggle('hover-menu-icon');
  });

  $icon.addEventListener("mouseleave", function(e) {

    this.classList.toggle('hover-menu-icon');
  });
}

// Converts :hover CSS to :active CSS on mobile devices.
// Otherwise, when tapping a button on a mobile device, the button stays in
// the :hover state until the button is pressed.

// Inspired by: https://gist.github.com/rcmachado/7303143
// @author  Michael Vartan <michael@mvartan.com>
// @version 1.0
// @date 2014-12-20

// Check if the device supports touch events
if(touchScreen) {

    // Loop through each stylesheet
    for(var sheetI = document.styleSheets.length - 1; sheetI >= 0; sheetI--) {
        var sheet = document.styleSheets[sheetI];

        // Verify if cssRules exists in sheet
        if(sheet.cssRules) {

            // Loop through each rule in sheet
            for(var ruleI = sheet.cssRules.length - 1; ruleI >= 0; ruleI--) {

                var rule = sheet.cssRules[ruleI];

                // Verify rule has selector text
                if(rule.selectorText) {

                // Replace hover psuedo-class with active psuedo-class
                rule.selectorText = rule.selectorText.replace(":hover", ":active");
                }
            }
        }
    }
}

// If the device is a mobile device enable custom hash history
// This is to address the device's back button behavior when leaving a project
// modal.
// Check when the location hash has changed
// If it has changed to 'home' and  a modal is open, close it
if(touchScreen && window.innerWidth <= 768) {

  // Set initial location hash to home once DOM has loaded
  document.addEventListener('DOMContentLoaded', function () {

      location.hash = "home";

  }, false);

  // Check for location hash changes
  window.onhashchange = function() {

        // If location hash changes to 'home' and the project modal is open,
        // close it
        if(location.hash === '#home') {

            if(typeof $('.modal-img-container') !== 'undefined') {

                clearModal();
            }
        }

  };
}

// When the device is not touch, adjust the positioning of the close btn on
// the modal by adjusting the padding.
// For some reason, without adjusting this, the positioning isn't the same
// across devices. Despite the code being the same, the position of the close
// btn in dev tools mobile view is different than on an actual mobile device.
// This adjusts for the bug
if(!touchScreen) {

  var closeWrapper = getNthChild($('.modal-header'), 0);

  closeWrapper.style.padding = "0px 0px 11px 3px";
}

