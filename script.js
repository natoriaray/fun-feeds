
var fullwidth = window.innerWidth - 700;
console.log(fullwidth)
var overlayOn = function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById('overlay').style.width = `281px`;
}

var overlayOff = function() {
    document.getElementById("overlay").style.display = "none";
  }

function openNav() {
    document.getElementById('main-side-nav').style.transition = '0.0s'
    document.getElementById('main-side-nav').style.width = '700px';
    overlayOn();
    
}

function closeNav() {
    document.getElementById('main-side-nav').style.transition = '0.3s'
    document.getElementById('main-side-nav').style.width = '0';
    overlayOff();
    
}

