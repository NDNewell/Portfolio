function clearModal(){clear($modalBody),$modal.style.display="none",document.body.style.overflow="visible"}var $=function(a){function b(a){var b=a.substr(1);return b}if(a.indexOf("#")>-1){var c=b(a),d=document.getElementById(c);return d}var e=b(a),f=document.getElementsByClassName(e);return f.length>1?f:f[0]},clear=function(a){if(Array.isArray(a)){var b=a.length;for(i=b;i--;)a[i].textContent=""}else a.textContent=""},getNthChild=function(a,b){if(!Array.isArray(a)){var c=a.childNodes[b];return c}},projects={project:[{projectName:"SURFLIST",modalBanner:'<img alt="surflist banner" src="img/surflist_banner.svg">',shortDescription:"made a wave finder app for surfers",projectDescription:"This is a single-page, responsive web application built from scratch where surfers can discover waves that fit their individual needs and criteria. Users can find a new wave break simply by scrolling through the list of locations. Locations are also searchable and can be explored via Google maps.",infoBullets:["JavaScript design patterns","JavaScript frameworks such as Knockout.js (MVVM)","loading data via AJAX requests","implementation of third-party APIs","storing assets to local storage for faster loading","caching application assets and files for faster loading","building with Grunt and Node.js modules for streamlining the build process","implementing image sprite sheets as well as external svg sprite sheets","utilizing Firebase for hosting, user authentication, and back-end data storage"],externalLink:"https://dazzling-torch-4012.firebaseapp.com/",githubLink:"https://github.com/NDNewell/frontend-nanodegree-map-project",cssClass:"surflist"},{projectName:"CARTMAN CRUSH",modalBanner:'<img alt="cartman crush banner" src="img/cartmancrush_banner.png">',shortDescription:"created a frogger-like arcade game",projectDescription:"This is a desktop-based Frogger-like game where the player, Eric Cartman, must navigate a street filled with killer bugs in order to reach the water on the opposite side.",infoBullets:["closures","object prototype chains","variable scope","HTML5 Canvas for game animation"],externalLink:"https://ndnewell.github.io/frontend-nanodegree-arcade-game/",githubLink:"https://github.com/NDNewell/frontend-nanodegree-arcade-game",cssClass:"ccrush"},{projectName:"UdaciFeeds",modalBanner:'<img alt="udacifeeds banner" src="img/udacifeeds.svg">',shortDescription:"completed testing for this web app",projectDescription:"This project consisted of being given a web-based application that reads RSS feeds. The original developer included an incomplete testing suite using Jasmine. The project aim was to complete the testing suite by writing tests that pass.",infoBullets:["ensuring loops work properly","determining if URLs are defined","checking if name fields are completed","ensuring the menu element is hidden by default","checking if the menu changes visiblity when clicked","making sure the feeds load properly"],externalLink:"http://NDNewell.github.io/frontend-nanodegree-feedreader",githubLink:"https://github.com/NDNewell/frontend-nanodegree-feedreader",cssClass:"udacifeeds"},{projectName:"Web Performance Optimization",modalBanner:'<img alt="web performance optimization banner" src="img/perfopt.jpg">',shortDescription:"optimized loading and performance",projectDescription:"This project involved being provided two websites with performance related issues. For Cam's Profile website, the goal was to optimize the page loading speed to a PageSpeed score of above 90. For Cam's Pizzeria website, the goal was to increase the frames per second (FPS) to 60+ by reviewing and replacing inefficient code with more succinct constructions.",infoBullets:["optimization of the critical rendering path (CRP)","profiling sites through a mobile phone via Chrome Canary","optimizing the DOM","unblocking CSS with media queries","asyncing JavaScript","workflow (Gulp and Grunt)","calculating CRP metrics"],externalLink:"https://ndnewell.github.io/frontend-nanodegree-mobile-portfolio",githubLink:"https://github.com/NDNewell/frontend-nanodegree-mobile-portfolio",cssClass:"perf"}]},touchScreen=function(){return"ontouchstart"in document.documentElement&&(console.log("device supports touch events"),!0)}();menu.addEventListener("click",function(a){drawer.classList.toggle("open"),a.stopPropagation(),touchScreen&&window.innerWidth<769&&(document.body.style.overflow="hidden")}),drawer.addEventListener("click",function(a){drawer.classList.toggle("open"),a.stopPropagation(),touchScreen&&window.innerWidth<769&&(document.body.style.overflow="visible")});var $projectSection=$(".projects"),$modal=$("#project-modal"),$modalContainer=$(".modal-container"),$modalBody=$(".modal-body"),$closeModalBtn=$(".close"),projectsConstructor=function(){function a(a){d.insertAdjacentHTML("beforeend",'<div class="'+a.cssClass+'-card project"></div>');var c=$("."+a.cssClass+"-card");c.insertAdjacentHTML("beforeend",a.modalBanner),c.insertAdjacentHTML("beforeend","<div></div>"),$hoverTextContainer=getNthChild(c,1),$hoverTextContainer.insertAdjacentHTML("beforeend","<p>"+a.shortDescription+"</p>"),b(c,a)}function b(a,b){a.addEventListener("click",function(a){return function(){modalConstructor(b),$modal.style.display="block",document.body.style.overflow="hidden"}}(b))}$projectSection.insertAdjacentHTML("beforeend",'<div class="projects-card card"></div>');var c=$(".projects-card");c.insertAdjacentHTML("beforeend",'<div class="projects-container"></div>');var d=$(".projects-container"),e=projects.project.length;for(i=0;i<e;i++){var f=projects.project[i];a(f)}}(),modalConstructor=function(a){$modalBody.insertAdjacentHTML("beforeend",'<div class="modal-img-container"></div>');var b=$(".modal-img-container");b.insertAdjacentHTML("beforeend",a.modalBanner),$modalBody.insertAdjacentHTML("beforeend",'<div class="modal-txt-container"></div>');var c=$(".modal-txt-container");c.insertAdjacentHTML("beforeend","<h3>"+a.projectName+"</h3>"),c.insertAdjacentHTML("beforeend","<p>"+a.projectDescription+"</p>"),c.insertAdjacentHTML("beforeend","<hX>The project focused on:</hX>"),c.insertAdjacentHTML("beforeend",'<ul class="'+a.cssClass+'-ul-list"></ul>');for(var d=a.infoBullets.length,e=$("."+a.cssClass+"-ul-list"),f=0;f<d;f++)e.insertAdjacentHTML("beforeend","<li>"+a.infoBullets[f]+"</li>");c.insertAdjacentHTML("beforeend",'<div class="link-container"></div>');var g=$(".link-container");g.insertAdjacentHTML("beforeend",'<a href="'+a.externalLink+'" target="_blank" class="ext-link"></a>'),$extLinkElem=$(".ext-link"),$extLinkElem.insertAdjacentHTML("beforeend",'<svg alt="link to project icon"><use xlink:href="#publish"/></svg>'),g.insertAdjacentHTML("beforeend",'<a href="'+a.githubLink+'" target="_blank" class="gh-link"></a>'),$ghLinkElem=$(".gh-link"),$ghLinkElem.insertAdjacentHTML("beforeend",'<svg alt="link to github repository icon"><use xlink:href="#github"/></svg>'),touchScreen&&window.innerWidth<769&&(document.body.scrollTop=document.documentElement.scrollTop=0)};$closeModalBtn.addEventListener("click",function(a){clearModal()}),window.addEventListener("click",function(a){a.target==$modalContainer&&clearModal()});var $sliderMenu=getNthChild($("#drawer"),0),$menuAbout=getNthChild($sliderMenu,0),$menuWork=getNthChild($sliderMenu,1),$menuSkills=getNthChild($sliderMenu,2),$body=document.getElementsByTagName("BODY")[0],$projectSection=$(".projects"),$skillsSection=$(".stack"),$aboutSection=$(".about");if($menuAbout.addEventListener("click",function(a){$body.scrollTop=$aboutSection.offsetTop+2}),$menuSkills.addEventListener("click",function(a){$body.scrollTop=$skillsSection.offsetTop+2}),$menuWork.addEventListener("click",function(a){$body.scrollTop=$projectSection.offsetTop+2}),document.addEventListener("DOMContentLoaded",function(){function a(){var a=setTimeout(function(){console.log("get external svg sprite sheet failed")},5e3);e=new XMLHttpRequest,e.open("GET","img/svg_sprites.svg",!0),e.onload=function(){e.status>=200&&e.status<400&&(d=e.responseText,clearTimeout(a),console.log("get external svg sprite sheet from server"),b(d),f&&c(d))},e.send()}function b(a){$body.insertAdjacentHTML("afterbegin",a);var b=getNthChild($body,0);b.style.display="none"}function c(a){console.log("save external svg sprite sheet to local storage"),g.portfolioSVGdata=a,g.portPicsVersion=i}var d,e,f=!0;try{var g=window.localStorage,h=g.getItem("portPicsVersion"),i=1;h==i?(console.log("get external svg sprite sheet from local storage"),d=g.portfolioSVGdata,b(d)):h===i&&null!==h||a()}catch(j){console.log("local storage disabled ("+j+")"),f=!1,a()}}),touchScreen)for(var sheetI=document.styleSheets.length-1;sheetI>=0;sheetI--){var sheet=document.styleSheets[sheetI];if(sheet.cssRules)for(var ruleI=sheet.cssRules.length-1;ruleI>=0;ruleI--){var rule=sheet.cssRules[ruleI];rule.selectorText&&(rule.selectorText=rule.selectorText.replace(":hover",":active"))}}