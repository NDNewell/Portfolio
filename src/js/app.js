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