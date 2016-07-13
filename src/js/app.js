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
    for(i = elemLength; i--;) {
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
          "externalLink": "https://dazzling-torch-4012.firebaseapp.com/",
          "cssClass": "surflist"
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
          "externalLink": "https://ndnewell.github.io/frontend-nanodegree-arcade-game/",
          "cssClass": "ccrush"
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
          "externalLink": "http://NDNewell.github.io/frontend-nanodegree-feedreader",
          "cssClass": "udacifeeds"
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
          "externalLink": "https://ndnewell.github.io/frontend-nanodegree-mobile-portfolio",
          "cssClass": "perf"
        }
    ]
};

// Open drawer to display menu on clicking hamburger icon
menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

// Close drawer upon clicking drawer
drawer.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

// Cache a reference to elements needed to construct project elems
// as well as the project modals
var $projectSection = $('.projects'),
    $modal = $('#project-modal'),
    $modalContainer = $('.modal-container'),
    $modalBody = $('.modal-body'),
    $closeModalBtn = $('.close');

// Self executing function that populates the DOM with project a list of
// completed projects
var projectsConstructor = (function() {

  // Add a container card to the projects section
  var projectsCard = document.createElement("div");
  projectsCard.className = "projects-card card";
  $projectSection.appendChild(projectsCard);

  // Save a reference to the project section's card
  var $projectsCard = $(".projects-card");

  // Add a projects container to hold the project cards
  var projectsContainer = document.createElement("div");
  projectsContainer.className = "projects-container";
  $projectsCard.appendChild(projectsContainer);

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
    var projectContainer = document.createElement("div");
    projectContainer.className = project.cssClass + "-card project";
    $projectsContainer.appendChild(projectContainer);

    // Save ref to the current project card
    var $projectCard = $("." + project.cssClass + "-card");

    // Add the projects banner image
    var projectImg = document.createElement("img");
    projectImg.src = project.modalBanner;
    projectImg.alt = project.bannerDescription;
    $projectCard.appendChild(projectImg);

    var hoverTextContainer = document.createElement("div");
    $projectCard.appendChild(hoverTextContainer);

    $hoverTextContainer = getNthChild($projectCard, 1);

    var hoverText = document.createElement("p"),
        hoverTextTxt = document.createTextNode(project.shortDescription);
    hoverText.appendChild(hoverTextTxt);
    $hoverTextContainer.appendChild(hoverText);

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

        // Show the modal
        $modal.style.display = "block";

        // Disable scrolling for the main page
        document.body.style.overflow = "hidden";
      };
    })(project));
  }
})();

// Populate modal with project data
// Pass the currently iterated project from the projects constructor
var modalConstructor = function (project) {

  // Add necessary DOM elements for constructing the modal
  // Add project information to each section

  // Add an image container for the project banner
  var imgContainer = document.createElement("div");
  imgContainer.className = "modal-img-container";
  $modalBody.appendChild(imgContainer);

  // Save a ref to the img container
  var $imgContainer = $(".modal-img-container");

  // Add banner image for the project
  var projectImg = document.createElement("img");
  projectImg.src = project.modalBanner;
  projectImg.alt = project.bannerDescription;
  $imgContainer.appendChild(projectImg);

  // Add an txt container for the project banner
  var txtContainer = document.createElement("div");
  txtContainer.className = "modal-txt-container";
  $modalBody.appendChild(txtContainer);

  // Save a ref to the img container
  var $txtContainer = $(".modal-txt-container");

  // Add the project name
  var projectName = document.createElement("h3"),
      projectNameTxt = document.createTextNode(project.projectName);
  projectName.appendChild(projectNameTxt);
  $txtContainer.appendChild(projectName);

  // Add the project description
  var projectDesc = document.createElement("p"),
      projectDescTxt = document.createTextNode(project.projectDescription);
  projectDesc.appendChild(projectDescTxt);
  $txtContainer.appendChild(projectDesc);

  // Add a header for the list of project bullet points
  var listHeader = document.createElement("hX"),
      listHeaderTxt = document.createTextNode("The project focused on:");
  listHeader.appendChild(listHeaderTxt);
  $txtContainer.appendChild(listHeader);

  // Create an empty unordered list
  var list = document.createElement("ul");
  list.className = project.cssClass + "-ul-list";
  $txtContainer.appendChild(list);

  // Cache ref to unordered list
  var infoBulletsLength = project.infoBullets.length,
      $listHead = $("." + project.cssClass + "-ul-list");

  // Add project bullet info to the unordered list
  for (var i = 0; i < infoBulletsLength; i++) {

    var listItem = document.createElement("li"),
        listItemTxt = document.createTextNode(project.infoBullets[i]);
    listItem.appendChild(listItemTxt);
    $listHead.appendChild(listItem);
  }

  // Add a container to hold an svg image link to the project
  var linkContainer = document.createElement("div");
  linkContainer.className = "link-container";
  $txtContainer.appendChild(linkContainer);

  // Save a ref to the link container
  var $modalLinkContainer = $(".link-container");

  // Add a link to the project that opens in a new window
  var extLink = document.createElement("a");
  extLink.href = project.externalLink;
  extLink.target = "_blank";
  extLink.className = project.cssClass + "-link";
  $modalLinkContainer.appendChild(extLink);

  // Save a ref to external link elem
  $extLinkElem = $("." + project.cssClass + "-link");

  // Add img that opens the external link when clicked
  var linkImg = document.createElement("img");
  linkImg.src = "/img/publish.svg";
  linkImg.alt = "link to project icon";
  $extLinkElem.appendChild(linkImg);
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

    // Clear the modal when closing it
    clear($modalBody);

    // Hide the modal
    $modal.style.display = "none";

    // Re-enable scrolling for main page
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
  $body.scrollTop = $aboutSection.offsetTop + 2;
});

$menuSkills.addEventListener("click", function(e) {
  $body.scrollTop = $skillsSection.offsetTop + 2;
});

$menuWork.addEventListener("click", function(e) {
  $body.scrollTop = $projectSection.offsetTop + 2;
});

document.addEventListener("DOMContentLoaded", function () {

    var data,
        xhr,
        localStorageEnabled = true;

    try {

      var localStorage = window.localStorage,
          portPicsVersionCached = localStorage.getItem('portPicsVersion'),
          portPicsVersion = 1;

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
      xhr.open('GET', '/img/svg_sprites.svg', true);
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
