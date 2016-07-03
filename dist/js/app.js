function showModal(a){moreInfoBtn[a].addEventListener("click",function(a){return function(a){console.log(a),modalContructor(),modal.style.display="block",document.body.style.overflow="hidden"}}(a))}var $=function(a){function b(a){var b=a.substr(1);return b}if(a.indexOf("#")>-1){var c=b(a),d=document.getElementById(c);return d}var e=b(a),f=document.getElementsByClassName(e);return f.length>1?f:f[0]},append=function(a,b){if(Array.isArray(a)){var c=a.length;for(i=c;i--;)a[i].innerHTML+=b}else a.innerHTML+=b},clear=function(a){if(Array.isArray(a)){var b=a.length;for(i=b;i--;)a[i].innerHTML=""}else a.innerHTML=""},getNthChild=function(a,b){if(!Array.isArray(a)){var c=a.childNodes[b];return c}console.log("error: cannot get child for all elements")},projects={project:[{projectName:"SURFLIST",modalBanner:"/img/surflist_banner.svg",projectDescription:"This is a single-page, responsive web application built from scratch where surfers can discover waves that fit their individual needs and criteria. Users can find a new wave break simply by scrolling through the list of locations. Locations are also searchable and can be explored via Google maps.",infoBullets:["JavaScript design patterns","JavaScript frameworks such as Knockout.js (MVVM)","loading data via AJAX requests","implementation of third-party APIs","storing assets to local storage for faster loading","caching application assets and files for faster loading","building with Grunt and Node.js modules for streamlining the build process","implementing image sprite sheets as well as external svg sprite sheets","utilizing Firebase for hosting, user authentication, and back-end data storage"],externalLink:"https://dazzling-torch-4012.firebaseapp.com/"},{projectName:"CARTMAN CRUSH",modalBanner:"/img/cartmancrush_banner.png",projectDescription:"This is a desktop-based Frogger-like game where the player, Eric Cartman, must navigate a street filled with killer bugs in order to reach the water on the opposite side.",infoBullets:["closures","JavaScript frameworks such as Knockout.js (MVVM)","object prototype chains","variable scope","HTML5 Canvas for game animation"],externalLink:"https://ndnewell.github.io/frontend-nanodegree-arcade-game/"},{projectName:"UdaciFeeds",modalBanner:"/img/udacifeeds.svg",projectDescription:"This project consisted of being given a web-based application that reads RSS feeds. The original developer included an incomplete testing suite using Jasmine. The project aim was to complete the testing suite by writing tests that pass.",infoBullets:["writing a test that ensures loops work properly","writing a test that determines if URLs are defined","writing a test that checks if name fields are completed","writing a test that ensures the menu element is hidden by default","writing a test that checks if the menu changes visiblity when clicked","writing a test that makes sure the feeds load properly"],externalLink:"https://github.com/NDNewell/frontend-nanodegree-feedreader"},{projectName:"Web Performance Optimization",modalBanner:"/img/perfopt.jpg",projectDescription:"This project involved being provided two websites with performance related issues. For Cam's Profile website, the goal was to optimize the page loading speed to a PageSpeed score of above 90. For Cam's Pizzeria website, the goal was to increase the frames per second (FPS) to 60+ by reviewing and replacing inefficient code with more succinct constructions.",infoBullets:["optimization of the critical rendering path (CRP)","profiling sites through a mobile phone via Chrome Canary","optimizing the DOM","unblocking CSS with media queries","asyncing JavaScript","workflow (Gulp and Grunt)"],externalLink:"https://ndnewell.github.io/frontend-nanodegree-mobile-portfolio"}]},modalContructor=function(){append(modalBody,'<img src="'+projects.project[0].modalBanner+'" alt="surflist project modal banner">'),append(modalBody,"<h3>"+projects.project[0].projectName+"</h3>"),append(modalBody,"<p>"+projects.project[0].projectDescription+"</p>"),append(modalBody,"<hX>The project focused on:</hX>"),append(modalBody,"<ul></ul>");for(var a=projects.project[0].infoBullets.length,b=getNthChild(modalBody,4),c=0;c<a;c++)append(b,"<li>"+projects.project[0].infoBullets[c]+"</li>");append(modalBody,'<div class="link-container"></div>');var d=$(".link-container");append(d,'<a href="'+projects.project[0].externalLink+'" target="_blank"><img src="/img/publish.svg" alt="link to project icon"></a>')};menu.addEventListener("click",function(a){drawer.classList.toggle("open"),a.stopPropagation(),document.body.style.overflow="hidden"}),drawer.addEventListener("click",function(a){drawer.classList.toggle("open"),a.stopPropagation(),document.body.style.overflow="visible"});var modal=$("#project-modal"),moreInfoBtn=$(".more-info-btn"),closeModalBtn=$(".close"),modalBody=$(".modal-body");for(i=moreInfoBtn.length;i--;)showModal(i);closeModalBtn.onclick=function(){clear(modalBody),modal.style.display="none",document.body.style.overflow="visible"},window.onclick=function(a){a.target==modal&&(modal.style.display="none",document.body.style.overflow="visible")};