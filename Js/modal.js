const modal1 = document.getElementById('myModal1');

// Get the button that opens the modal1
const btn = document.getElementById('myBtn1');

// Get the <span> element that closes the modal1
const span = document.getElementsByClassName('close')[0];

// Get the <a> element that closes the modal1 when the links are clicked
const linkPortfolio = document.getElementsByClassName('link-x')[0];
const linkAbout = document.getElementsByClassName('link-1')[0];
const linkContact = document.getElementsByClassName('link-2')[0];

// When the user clicks the button, open the modal1
btn.onclick = function btn() {
  modal1.style.display = 'block';
  modal1.style.backgroundColor = 'none';
};

// When the user clicks on <span> (x), close the modal1
span.onclick = function span() {
  modal1.style.display = 'none';
};

// When the user clicks on porfolio link, close the modal1
linkPortfolio.onclick = function linkPortfolio() {
  modal1.style.display = 'none';
};

// When the user clicks on about link, close the modal1
linkAbout.onclick = function linkAbout() {
  modal1.style.display = 'none';
};

// When the user clicks on contact link, close the modal1
linkContact.onclick = function linkContact() {
  modal1.style.display = 'none';
};

// When the user clicks anywhere outside of the modal1, close it
window.onclick = function window(event) {
  if (event.target === modal1) {
    modal1.style.display = 'none';
  }
};
