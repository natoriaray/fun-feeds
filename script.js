
var fullwidth = window.innerWidth - 700;

var docEl = {
    overlay: document.getElementById("overlay"),
    docSideNav: document.getElementById('main-side-nav')
}

var overlayOn = function() {
    docEl.overlay.style.display = "block";
    docEl.overlay.style.width = `calc(${fullwidth}px)`;
}

var overlayOff = function() {
    docEl.overlay.style.display = "none";
  }

function openNav() {
    docEl.docSideNav.style.transition = '0.0s'
    docEl.docSideNav.style.width = '700px';
    overlayOn();
    
}

function closeNav() {
    docEl.docSideNav.style.transition = '0.3s'
    docEl.docSideNav.style.width = '0';
    overlayOff();
    
}

