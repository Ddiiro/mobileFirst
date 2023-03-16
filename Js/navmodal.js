const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// Get the <a> element that closes the modal when the links are clicked
const linkPortfolio = document.getElementsByClassName('link-x')[0];
const linkAbout = document.getElementsByClassName('link-1')[0];
const linkContact = document.getElementsByClassName('link-2')[0];

// When the user clicks the button, open the modal
btn.onclick = function btn() {
  modal.style.display = 'block';
  modal.style.backgroundColor = 'none';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function span() {
  modal.style.display = 'none';
};

// When the user clicks on porfolio link, close the modal
linkPortfolio.onclick = function linkPortfolio() {
  modal.style.display = 'none';
};

// When the user clicks on about link, close the modal
linkAbout.onclick = function linkAbout() {
  modal.style.display = 'none';
};

// When the user clicks on contact link, close the modal
linkContact.onclick = function linkContact() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function window(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};