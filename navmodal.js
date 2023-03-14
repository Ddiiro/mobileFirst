var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the <a> element that closes the modal when the links are clicked
var linkPortfolio = document.getElementsByClassName("link-x")[0];
var linkAbout = document.getElementsByClassName("link-1")[0];
var linkContact = document.getElementsByClassName("link-2")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on porfolio link, close the modal
linkPortfolio.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on about link, close the modal
linkAbout.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on contact link, close the modal
linkContact.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}